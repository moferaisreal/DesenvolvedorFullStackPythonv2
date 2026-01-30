import PAvatar from "../../components/Avatar";
import Para from "../../components/Para";
import Title from "../../components/Title";
import { SidebarContainer, ThemeBtn } from "./styles";

type SidebarProps = {
  toggleTheme: () => void;
  isDark: boolean;
};

const Sidebar = ({ toggleTheme, isDark }: SidebarProps) => (
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
      <ThemeBtn onClick={toggleTheme}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </ThemeBtn>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
