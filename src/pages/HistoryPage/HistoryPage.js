import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UserContext } from "../../constants/context";
import { BASE_URL } from "../../constants/url";
import { ContainerCalendar, ContainerHistory, ContainerHistoryHabit } from "./styledHistory";
import "../../style/Calendar.css";
import dayjs from "dayjs";
import { CheckmarkSharp } from "react-ionicons";
import { ButtonToday } from "../TodayPage/styledToday";


export default function HistoryPage() {
  const [days, setDays] = useState([]);
  const { user } = useContext(UserContext);
  const [value, setValue] = useState(new Date());
  const [habits, setHabits] = useState([]);

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
          return "doneTasks";
        }
      }
    }
  }


  return (
    <>
      <Header />
      <ContainerHistory>
        <h1>Histórico</h1>
        <ContainerCalendar data-test="calendar">
          <Calendar
            onChange={onChange}
            value={value}
            formatDay={(locale, date) => (dayjs(date).format("DD"))}
            tileClassName={changeClass}
            onClickDay={(event) => {
              const index = days.findIndex(el => el.day === dayjs(event).format("DD/MM/YYYY"));
              const arr = [...days[index].habits];
              setHabits(arr);
            }}
            data-test="calendar" />
        </ContainerCalendar>
        {habits.length !== 0 && habits.map(h => <ContainerHistoryHabit key={h.id}>
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