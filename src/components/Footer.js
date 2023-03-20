import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DoneHabitsContext } from "../context/context";

export default function Footer() {
  const { doneHabits } = useContext(DoneHabitsContext);

  return (
    <Container data-test="menu">
      <Link to="/habitos" data-test="habit-link"><h1>Hábitos</h1></Link>
      <ContainerProgress>
        <Link to="/hoje" data-test="today-link"><CircularProgressbar
          value={doneHabits}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            textSize: "18px"
          })}
        /></Link>
      </ContainerProgress>
      <Link to="/historico" data-test="history-link"><h1>Histórico</h1></Link>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #FFFFFF;
  h1{   
    font-size: 18px;
    color: #52B6FF;
  }
`;

const ContainerProgress = styled.div`
  width: 91px;
  height: 91px;
  text-align: center;
  position: relative;
  bottom: 20px;
`;