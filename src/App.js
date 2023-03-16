import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import styled from "styled-components";
import { useState } from "react";
import { DoneHabitsContext, UserContext } from "./constants/context";


function App() {
  const [user, setUser] = useState(null);
  const [doneHabits, setDoneHabits] = useState(0);

  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <DoneHabitsContext.Provider value={{ doneHabits, setDoneHabits }}>
            <Routes>

              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<SignupPage />} />
              <Route path="/habitos" element={<HabitsPage />} />
              <Route path="/hoje" element={<TodayPage />} />
              <Route path="/historico" element={<HistoryPage />} />

            </Routes>
          </DoneHabitsContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
`;

export default App;
