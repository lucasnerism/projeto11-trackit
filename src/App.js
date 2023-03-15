import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import styled from "styled-components";
import React from "react";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <Container>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>

            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignupPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoryPage />} />

          </Routes>
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
