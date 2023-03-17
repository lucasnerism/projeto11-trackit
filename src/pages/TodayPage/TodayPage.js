import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/url";
import { DoneHabitsContext, UserContext } from "../../constants/context";
import { ContainerDay, ContainerToday, Span } from "./styledToday";
import TodayHabit from "./TodayHabit";
import dayjs from "dayjs";



export default function TodayPage() {
  const { user } = useContext(UserContext);
  const { doneHabits, setDoneHabits } = useContext(DoneHabitsContext);
  const [habits, setHabits] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    };
    const url = `${BASE_URL}/habits/today`;
    axios.get(url, config)
      .then(resp => {
        const percent = 100;
        setHabits(resp.data);
        let cont = 0;
        resp.data.forEach(el => {
          if (el.done) {
            cont++;
          }
        });
        const percentage = (cont / resp.data.length) * percent;
        setDoneHabits(percentage);
      })
      .catch();
  }, [reload]);
  return (
    <>
      <Header />
      <ContainerToday>
        <ContainerDay>
          <h1 data-test="today">{dayjs().format("dddd, DD/MM")}</h1>
          <p data-test="today-counter">{(doneHabits === 0 || habits.length === 0) ? "Nenhum hábito concluído ainda" :
            <Span sequence={true}>{`${doneHabits.toFixed(1).replace(/[.,]0$/, "")}% dos hábitos concluídos`}</Span>}
          </p>
        </ContainerDay>
        {habits.map(h => (
          <TodayHabit setReload={setReload}
            reload={reload}
            done={h.done}
            currentSequence={h.currentSequence}
            highestSequence={h.highestSequence}
            id={h.id}
            key={h.id}
            name={h.name}
          />))}
      </ContainerToday>
      <Footer />
    </>
  );
}