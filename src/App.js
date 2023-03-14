import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habits from "./pages/HabitsPage/Habits";
import Today from "./pages/TodayPage/Today";
import Signup from "./pages/SignupPage/Signup";
import Login from "./pages/LoginPage/Login";
import History from "./pages/HistoryPage/History";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/habitos" element={<Habits />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
