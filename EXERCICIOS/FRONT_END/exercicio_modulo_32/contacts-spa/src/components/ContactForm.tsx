import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';
import { v4 as uuidv4 } from 'uuid';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      addContact({
        id: uuidv4(),
        fullName,
        email,
        phone,
      }),
    );

    setFullName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-surface p-8 rounded-2xl shadow-2xl mb-8 space-y-5 border border-secondary/20'
    >
      <h2 className='text-xl font-semibold text-secondary'>
        Adicionar Contato
      </h2>

      <input
        className='w-full p-3 rounded-lg bg-card border border-secondary/30 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent transition'
        placeholder='Nome Completo'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className='w-full p-3 rounded-lg bg-card border border-secondary/30 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent transition'
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className='w-full p-3 rounded-lg bg-card border border-secondary/30 text-textPrimary focus:outline-none focus:ring-2 focus:ring-accent transition'
        placeholder='Telefone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className='w-full bg-primary text-background font-bold py-3 rounded-lg hover:bg-warning transition duration-300'>
        Adicionar Contato
      </button>
    </form>
  );
}
