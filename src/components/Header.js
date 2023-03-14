import styled from "styled-components";


export default function Header() {
  return (
    <Container>
      <h1>TrackIt</h1>
      <img src="" alt="perfil" />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #126BA5;
  h1{
    font-family: 'Playball';
    font-weight: 400;
    font-size: 39px;
    color: #FFFFFF;
  }
  img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;