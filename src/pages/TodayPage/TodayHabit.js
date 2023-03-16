import { ButtonToday, ContainerTodayHabit, Span } from "./styledToday";
import { CheckmarkSharp } from "react-ionicons";
import { useContext } from "react";
import { UserContext } from "../../constants/context";
import { BASE_URL } from "../../constants/url";
import axios from "axios";

export default function TodayHabit({ setReload, done, currentSequence, highestSequence, name, id, reload }) {
  const { user } = useContext(UserContext);

  function handleCheck(id) {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    };

    if (done) {
      const url = `${BASE_URL}/habits/${id}/uncheck`;
      axios.post(url, {}, config)
        .then(() => setReload(!reload));
    } else {
      const url = `${BASE_URL}/habits/${id}/check`;
      axios.post(url, {}, config)
        .then(() => setReload(!reload));
    }
  }

  return (
    <ContainerTodayHabit data-test="today-habit-container">
      <div>
        <h1 data-test="today-habit-name">{name}</h1>
        <p data-test="today-habit-sequence">Sequência atual: {<Span
          sequence={done}>{`${currentSequence}${currentSequence === 1 ? " dia" : " dias"}`}</Span>}</p>
        <p data-test="today-habit-record">Seu recorde: {<Span
          sequence={currentSequence === highestSequence && currentSequence !== 0}>
          {`${highestSequence}${highestSequence === 1 ? " dia" : " dias"}`}</Span>}</p>
      </div>
      <ButtonToday
        selected={done}
        onClick={() => {
          handleCheck(id);
        }}
        data-test="today-habit-check-btn"
      ><CheckmarkSharp
          color={'#ffffff'}
          title="check"
          width="40px"
          height="40px"
        /></ButtonToday>
    </ContainerTodayHabit >
  );
}