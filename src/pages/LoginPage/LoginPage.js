import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BASE_URL } from "../../constants/url";
import React from "react";
import { UserContext } from "../../context/context";
import { Container, Form } from "../../components/forms";


export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserContext);
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ email: "", password: "" });

  React.useEffect(() => {
    const usersalvo = localStorage.getItem("user");
    if (usersalvo !== null) {
      setUser(JSON.parse(usersalvo));
      navigate("/hoje");
    }

  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const url = `${BASE_URL}/auth/login`;

    axios.post(url, form)
      .then(resp => {
        const obj = { token: resp.data.token, image: resp.data.image };
        setUser(obj);
        localStorage.setItem("user", JSON.stringify(obj));
        navigate("/hoje");
      })
      .catch(err => {
        alert(err.response.data.details);
        setLoading(false);
      });
  }

  function handleChange(e) {
    const obj = { ...form };
    obj[e.target.name] = e.target.value;
    setForm(obj);
  }

  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <input placeholder="email" required disabled={loading}
          value={form.email}
          name="email"
          data-test="email-input"
          onChange={event => handleChange(event)}></input>
        <input placeholder="senha" required disabled={loading}
          value={form.password}
          type="password"
          name="password"
          data-test="password-input"
          onChange={event => handleChange(event)}></input>
        <button type="submit"
          data-test="login-btn"
          disabled={loading}>{loading ? <ThreeDots
            height="13"
            width="51"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            visible={true}
          /> : "Entrar"}</button>
      </Form>
      <Link to="/cadastro" data-test="signup-link" >Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
