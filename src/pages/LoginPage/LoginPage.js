import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { BASE_URL } from "../../constants/url";
import React from "react";
import { UserContext } from "../../UserContext";
import { Container, Form } from "../../components/forms";


export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = React.useContext(UserContext);
  const [carregando, setCarregando] = React.useState(false);
  const [form, setForm] = React.useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);
    const url = `${BASE_URL}/auth/login`;

    axios.post(url, form)
      .then(resp => {
        setUser({ token: resp.data.token, image: resp.data.image });
        navigate("/hoje");
      })
      .catch(err => {
        alert(err.response.data.details);
        setCarregando(false);
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
        <input placeholder="email" required disabled={carregando} value={form.email} name="email"
          onChange={event => handleChange(event)}></input>
        <input placeholder="senha" required disabled={carregando} value={form.password} type="password" name="password"
          onChange={event => handleChange(event)}></input>
        <button type="submit" disabled={carregando}>{carregando ? <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible={true}
        /> : "Entrar"}</button>
      </Form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}
