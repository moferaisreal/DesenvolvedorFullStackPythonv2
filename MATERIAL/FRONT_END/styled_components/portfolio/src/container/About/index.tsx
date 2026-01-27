import Para from "../../components/Para";
import Title from "../../components/Title";
import { GithubSection } from "./styles";
const About = () => {
  return (
    <section>
      <Title fontSize="1rem">Sobre</Title>
      <Para fweight="bold" color="main">
        Marcelo Rocha é um desenvolvedor full stack com experiência em Python e
        React.
      </Para>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=moferaisreal&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=moferaisreal&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  );
};
export default About;
