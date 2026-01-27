import PAvatar from "../../components/Avatar";
import Para from "../../components/Para";
import Title from "../../components/Title";
import { Description,ThemeBtn,SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>

    <PAvatar />
    <Title fontSize="1.25rem">Marcelo Rocha</Title>
    <Para color="sec" fweight="norm" fontSize="1.25rem">
      moferaisreal
    </Para>
    <Para color="main" fontSize=".75rem">
      Full Stack Developer
    </Para>
    <ThemeBtn>Dark</ThemeBtn>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
