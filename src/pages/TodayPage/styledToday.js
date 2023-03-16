import styled from "styled-components";

export const ContainerTodayHabit = styled.div`
  width: 340px;
  height: 94px;
  border-radius: 5px;
  background-color: #FFFFFF;
  color: #666666;
  padding: 13px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
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

export const Span = styled.span`
  color: ${props => props.sequence ? "#8FC549" : "#666666"}
`;

export const ButtonToday = styled.button`
  width: 69px;
  height: 69px;
  ${props => (props.selected ? "background: #8FC549" : "background: #EBEBEB")};
  border: 1px solid #E7E7E7;
  border-radius: 5px;
`;

export const ContainerToday = styled.div`
  width: 375px;
  padding: 70px 17px;
  display: flex;
  flex-direction: column;
`;

export const ContainerDay = styled.div`
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    font-size: 23px;
    color: #126BA5;
  }
  p{
    font-size: 18px;
    color: #BABABA;
  }
`;