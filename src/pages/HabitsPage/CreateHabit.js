import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { UserContext } from "../../context/context";
import { Button, ContainerButton, ContainerDays, HabitCreate } from "./styledHabits";
import { arrdays } from "../../constants/days";
import { ThreeDots } from "react-loader-spinner";


export default function CreateHabit({ setCreate, name, setName, days, setDays }) {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  function handleClick(i) {
    if (days.includes(i)) {
      const arr = days.filter(el => el !== i);
      setDays(arr);
    } else {
      const arr = [...days, i];
      setDays(arr);
    }
  }

  function sendHabit() {
    setLoading(true);
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    };
    const url = `${BASE_URL}/habits`;
    const body = { name, days };
    axios.post(url, body, config)
      .then(() => {
        setCreate(false);
        setName("");
        setDays([]);
      })
      .catch(err => {
        alert(err.response.data.details);
        setLoading(false);
      });
  }

  return (
    <HabitCreate data-test="habit-create-container">
      <input placeholder="nome do hábito"
        value={name}
        data-test="habit-name-input"
        disabled={loading}
        onChange={event => setName(event.target.value)}
      ></input>
      <ContainerDays>
        {arrdays.map((d, index) => <Button
          data-test="habit-day"
          key={index}
          disabled={loading}
          selected={days.includes(index)}
          onClick={() => handleClick(index)}>{d}</Button>)}
      </ContainerDays>
      <ContainerButton>
        <button disabled={loading} data-test="habit-create-cancel-btn" onClick={() => setCreate(false)}>Cancelar</button>
        <button disabled={loading} data-test="habit-create-save-btn" onClick={sendHabit}>{loading ? <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible={true}
        /> : "Salvar"}</button>
      </ContainerButton>
    </HabitCreate>
  );
}