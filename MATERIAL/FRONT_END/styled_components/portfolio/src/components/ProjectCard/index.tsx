import Para from "../Para";
import Title from "../Title";
import { BtnLink, Card } from "./styles";

const ProjectCard = () => (
  <Card>
    <Title fontSize="1.25rem">Card de projeto</Title>
    <Para color="sec" fweight="norm">
      Descrição do projeto
    </Para>
    <BtnLink href="#">Acessar</BtnLink>
  </Card>
);
export default ProjectCard;
