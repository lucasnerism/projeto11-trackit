import styled from "styled-components";

const Habit = styled.div`
  width: 340px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 17px;
  input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #666666;
    font-size: 20px;
    ::placeholder{
      color: #DBDBDB;
    }
    button{
      width: 84px;
      height: 35px;
      background: #52B6FF;
      border-radius: 5px;
      color: #FFFFFF;
    }
  }
`;