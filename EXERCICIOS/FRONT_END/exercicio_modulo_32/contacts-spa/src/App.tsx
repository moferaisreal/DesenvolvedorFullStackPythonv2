import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-primary tracking-wide">
          📇 Contact Manager
        </h1>

        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
