import { useState } from "react";
import { ThemeProvider } from "styled-components";
import About from "./container/About";
import Projects from "./container/Projects";
import Sidebar from "./container/Sidebar";
import GlobalStyle, { Container } from "./styles";
import DarkTheme from "./Themes/Dark";
import LightTheme from "./Themes/Light";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);

  const toggleTheme = () => {
    setChangeTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={changeTheme ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar toggleTheme={toggleTheme} isDark={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
