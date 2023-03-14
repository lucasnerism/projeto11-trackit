import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  return (
    <Container>
      <h1>Hábitos</h1>
      <ContainerProgress>
        <CircularProgressbar
          value={66}
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
        />
      </ContainerProgress>
      <h1>Histórico</h1>
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
  left: 0;
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