import styled from "styled-components";

export const ContainerHistory = styled.div`
  font-family: 'Lexend Deca';  
  font-weight: 400;   
  width: 375px;
  padding: 70px 17px;
  h1{
    font-size: 23px;
    color: #126BA5;
    margin: 28px 0 11px 0 ;
  }
`;

export const ContainerHistoryHabit = styled.div`
  width: 340px;
  height: 94px;
  border-radius: 5px;
  background-color: #FFFFFF;
  color: #666666;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  div{
    display: flex;
    flex-direction: column;
  }
  h1{
    font-size: 20px;    
    margin-bottom: 7px;
  }
  p{
    font-size: 13px;   
  }
`;

export const ContainerCalendar = styled.div`
  .doneTasks{
    button{
      background-color: #8cc654;
    }
}
  .notDoneTasks{
    button{
      background-color: #ea5766;
    }
  }
`;