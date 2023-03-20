import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UserContext } from "../../context/context";
import { BASE_URL } from "../../constants/url";
import { ContainerHistory, ContainerHistoryHabit, StyledCalendar } from "./styledHistory";
import dayjs from "dayjs";
import { CheckmarkSharp } from "react-ionicons";
import { ButtonToday } from "../TodayPage/styledToday";


export default function HistoryPage() {
  const [days, setDays] = useState([]);
  const { user } = useContext(UserContext);
  const [value, setValue] = useState(new Date());
  const [habits, setHabits] = useState([]);
  const [chosenDay, setChosenDay] = useState();

  function onChange(nextValue) {
    setValue(nextValue);
  }

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`
      }
    };
    const url = `${BASE_URL}/habits/history/daily`;
    axios.get(url, config)
      .then(resp => setDays(resp.data))
      .catch(err => console.log(err.response.data));
  }, []);

  function changeClass({ date }) {
    const newdate = dayjs(date).format("DD/MM/YYYY");
    for (let i = 0; i < days.length; i++) {
      if (days[i].day === newdate) {
        if (days[i].habits.some(el => el.done === false)) {
          return "notDoneTasks";
        } else {
          return "react-calendar__tile--doneTasks";
        }
      }
    }
  }

  return (
    <>
      <Header />
      <ContainerHistory>
        <h1>Histórico</h1>
        <div data-test="calendar">
          <StyledCalendar
            onChange={onChange}
            value={value}
            formatDay={(locale, date) => (dayjs(date).format("DD"))}
            tileClassName={changeClass}
            onClickDay={(event) => {
              const date = dayjs(event).format("DD/MM/YYYY");
              const index = days.findIndex(el => el.day === date);
              if (index !== -1) {
                const arr = [...days[index].habits];
                setHabits(arr);
                setChosenDay(date);
              }
            }}
            data-test="calendar" />
        </div>
        {habits.length !== 0 && <h1>{`Hábitos do dia ${chosenDay}`}</h1>}
        {habits.length !== 0 &&
          habits.map(h => <ContainerHistoryHabit key={h.id}>
            <div>
              <h1>{h.name}</h1>
            </div>
            <ButtonToday
              selected={h.done}
            ><CheckmarkSharp
                color={'#ffffff'}
                title="check"
                width="40px"
                height="40px"
              /></ButtonToday>
          </ContainerHistoryHabit>)}
      </ContainerHistory>
      <Footer />
    </>
  );
}