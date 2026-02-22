import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Container, Title } from './styles/styles';

function App() {
  return (
    <Container>
      <Title>📇 Agenda</Title>
      <ContactForm />
      <ContactList />
    </Container>
  );
}

export default App;
