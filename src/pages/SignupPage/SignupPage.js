import axios from "axios";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { BASE_URL } from "../../constants/url";
import { Container, Form } from "../../components/forms";


export default function SignupPage() {
  const [carregando, setCarregando] = React.useState(false);
  const [form, setForm] = React.useState({ email: "", password: "", image: "", name: "" });
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);
    const url = `${BASE_URL}/auth/sign-up`;

    axios.post(url, form)
      .then(() => {
        navigate("/");
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
        <input placeholder="email" value={form.email} disabled={carregando} name="email"
          required onChange={event => handleChange(event)}></input>
        <input placeholder="senha" value={form.password} disabled={carregando} type="password" name="password"
          required onChange={event => handleChange(event)}></input>
        <input placeholder="nome" value={form.name} disabled={carregando} name="name"
          required onChange={event => handleChange(event)}></input>
        <input placeholder="foto" value={form.image} disabled={carregando} type="url" name="image"
          required onChange={event => handleChange(event)}></input>
        <button type="submit" disabled={carregando} >{carregando ? <ThreeDots
          height="13"
          width="51"
          radius="9"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
          visible={true}
        /> : "Cadastrar"}</button>
      </Form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}