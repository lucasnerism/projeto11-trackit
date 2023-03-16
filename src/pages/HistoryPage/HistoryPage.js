import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UserContext } from "../../constants/context";
import { BASE_URL } from "../../constants/url";
import { ContainerCalendar, ContainerHistory } from "./styledHistory";
import "../../style/Calendar.css";
import dayjs from "dayjs";


export default function HistoryPage() {
  const [days, setDays] = useState([]);
  const { user } = useContext(UserContext);
  const [value, setValue] = useState(new Date());

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

  function changeClass({ date, view }) {
    const newdate = dayjs(date).format("DD/MM/YYYY");
    if (days.length !== 0) {
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
  };


  return (
    <>
      <Header />
      <ContainerHistory>
        <h1>Histórico</h1>
        <ContainerCalendar>
          <Calendar
            onChange={onChange}
            value={value}
            formatDay={(locale, date) => (dayjs(date).format("DD"))}
            tileClassName={changeClass}
            data-test="calendar" />
        </ContainerCalendar>
      </ContainerHistory>
      <Footer />
    </>
  );
}