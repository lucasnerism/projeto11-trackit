import { Button, ContainerDays, ContainerHabit, Delete } from "./styledHabits";
import { arrdays } from "../../constants/days";
import { TrashOutline } from 'react-ionicons';
import { useContext } from "react";
import { UserContext } from "../../context/context";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export default function Habits({ id, name, days, setReload, reload }) {
  const { user } = useContext(UserContext);

  function deleteHabit(id) {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    };
    const url = `${BASE_URL}/habits/${id}`;
    axios.delete(url, config)
      .then(() => setReload(!reload))
      .catch(err => console.log(err.response.data));

  }

  return (
    <ContainerHabit data-test="habit-container">
      <p data-test="habit-name">{name}</p>
      <ContainerDays>
        {arrdays.map((d, index) => <Button
          data-test="habit-day"
          key={index}
          disabled
          selected={days.includes(index)} >{d}</Button>)}
      </ContainerDays>
      <Delete data-test="habit-delete-btn">
        <TrashOutline
          color={'#666666'}
          title="delete"
          height="15px"
          width="15px"
          style={{}}
          onClick={() => {
            if (window.confirm("Gostaria realmente de apagar esse hábito?")) {
              deleteHabit(id);
            }
          }}
        /></Delete>
    </ContainerHabit>
  );
}
