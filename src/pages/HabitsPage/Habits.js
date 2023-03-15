import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Button, ContainerDays, ContainerHabit } from "./styledHabits";
import { arrdays } from "../../constants/days";
import { TrashOutline } from 'react-ionicons';
import { useContext } from "react";
import { UserContext } from "../../UserContext";
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
    <ContainerHabit>
      <p>{name}</p>
      <ContainerDays>
        {arrdays.map((d, index) => <Button key={index} disabled selected={days.includes(index + 1)} >{d}</Button>)}
      </ContainerDays>
      <TrashOutline
        color={'#666666'}
        title="delete"
        height="15px"
        width="15px"
        style={{ position: "absolute", top: "11px", right: "10px" }}
        onClick={() => {
          if (window.confirm("Gostaria realmente de apagar esse hábito?")) deleteHabit(id);
        }}
      />
    </ContainerHabit>
  );
};;