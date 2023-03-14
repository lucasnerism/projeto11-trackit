import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Login() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <input placeholder="email"></input>
        <input placeholder="senha"></input>
        <button type="submit" >Entrar</button>
      </Form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
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