import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Signup() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <input placeholder="email"></input>
        <input placeholder="senha"></input>
        <input placeholder="nome"></input>
        <input placeholder="foto"></input>
        <button type="submit" >Cadastrar</button>
      </Form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: center;
  padding: 68px 0;
  background-color:#FFFFFF ;
  height: 667px;
  img{
    width: 180px;
  }
  a{
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
  }
`;

const Form = styled.form`
  margin: 33px auto 0px;
  padding-left: 36px;
  input{
    width: 303px;
    height: 45px;
    border-radius: 5px;
    margin-bottom: 6px;
    border: 1px solid #D5D5D5;
    ::placeholder{
      color: #DBDBDB;
      font-size: 20px;
    }
  }
  button{
    width: 309px;
    height: 45px;
    border-radius: 5px;
    background: #52B6FF;
    color: #FFFFFF;
    border: none;
    margin-bottom: 36px;
    font-size: 21px;
  }
`;