import styled from "styled-components";

const Container = styled.div`
  font-family: 'Lexend Deca';  
  font-weight: 400;   
  display: flex;
  flex-direction: column;  
  align-items: center;
  padding: 68px 0;
  background-color:#FFFFFF ;
  height: 667px;
  width: 375px;
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
    padding: 5px;
    ::placeholder{
      color: #DBDBDB;
      font-size: 20px;
    }
  }
  button{
    width: 303px;
    height: 45px;
    border-radius: 5px;
    background: #52B6FF;
    color: #FFFFFF;
    border: none;
    margin-bottom: 36px;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled{
      opacity: 0.7;
    }
  }
`;
export { Container, Form };