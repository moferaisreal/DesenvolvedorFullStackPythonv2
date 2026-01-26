import styled from "styled-components";
type BotaoProps = {
  main: boolean;
  font?: string;
};
const Botao = styled.button`
  background-color: ${(props) => (props.main ? "blue" : "red")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.main ? "darkblue" : "darkred")};
  }
`;

const DangerZone = styled(Botao)`
  background-color: black;
  color: red;
  &:hover {
    background-color: darkred;
    color: black;
  }
  span {
    text-decoration: underline;
  }
`;

function Tst() {
  return (
    <>
      <div>Hello</div>
      <Botao main>Click Me</Botao>
      <Botao main={false}>Don't Click Me</Botao>
      <DangerZone as="a">
        <span>Danger Zone</span>
      </DangerZone>
    </>
  );
}

export default Tst;
