import About from "./container/About";
import Projects from "./container/Projects";
import Sidebar from "./container/Sidebar";
import GlobalStyle, { Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  );
}

export default App;
