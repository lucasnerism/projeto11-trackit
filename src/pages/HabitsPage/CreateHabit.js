import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/url";
import { UserContext } from "../../UserContext";
import { Button, ContainerButton, ContainerDays, HabitCreate } from "./styledHabits";
import { arrdays } from "../../constants/days";

export default function CreateHabit({ setCreate, name, setName, days, setDays }) {
  const [carregando, setCarregando] = useState(false);
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
    setCarregando(true);
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
        setCarregando(false);
      });
  }

  return (
    <HabitCreate data-test="habit-create-container">
      <input placeholder="nome do hábito"
        value={name}
        data-test="habit-name-input"
        disabled={carregando}
        onChange={event => setName(event.target.value)}
      ></input>
      <ContainerDays>
        {arrdays.map((d, index) => <Button
          data-test="habit-day"
          key={index}
          disabled={carregando}
          selected={days.includes(index + 1)}
          onClick={() => handleClick(index + 1)}>{d}</Button>)}
      </ContainerDays>
      <ContainerButton>
        <button disabled={carregando} data-test="habit-create-cancel-btn" onClick={() => setCreate(false)}>Cancelar</button>
        <button disabled={carregando} data-test="habit-create-save-btn" onClick={sendHabit}>Salvar</button>
      </ContainerButton>
    </HabitCreate>
  );
}