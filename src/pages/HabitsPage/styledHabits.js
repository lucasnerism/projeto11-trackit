import styled from "styled-components";

export const HabitCreate = styled.div`
  width: 340px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 29px;
  position: relative;
  input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #666666;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
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

export const Delete = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`;

export const ContainerHabit = styled.div`
  font-family: 'Lexend Deca';  
  font-weight: 400;   
  width: 340px;
  height: 91px;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 29px;
  position: relative;
  p{
    margin: 0 0 10px 2px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  right: 15px;
  button{
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:disabled{
      opacity: 0.7;
    }
    :first-of-type{
      background: #FFFFFF;    
      color: #52B6FF;
    }
    :last-of-type{
      background: #52B6FF;    
      color: #FFFFFF;
      margin-left: 6px;
    }
  }
`;

export const ContainerDays = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 20px;
    margin-right: 4px;
    ${props => (props.selected ? "background: #CFCFCF; border: 1px solid #CFCFCF; color: #FFFFFF;" : "background: #FFFFFF; border: 1px solid #D5D5D5; color: #DBDBDB;")}   
  
`;

