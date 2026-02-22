import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact, editContact } from '../features/contacts/contactsSlice';
import type { RootState } from '../app/store';
import { Form, Input, Button } from './ContactForm.styles';
import { phoneMask, normalizeEmail } from '../utils/masks';

export default function ContactForm() {
  const dispatch = useDispatch();
  const editingContact = useSelector(
    (state: RootState) => state.contacts.editingContact,
  );

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingContact) {
      setFullName(editingContact.fullName);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    }
  }, [editingContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingContact) {
      dispatch(
        editContact({
          ...editingContact,
          fullName,
          email,
          phone,
        }),
      );
    } else {
      dispatch(
        addContact({
          id: uuidv4(),
          fullName,
          email,
          phone,
        }),
      );
    }

    setFullName('');
    setEmail('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder='Nome completo'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      <Input
        type='email'
        placeholder='E-mail'
        value={email}
        onChange={(e) => setEmail(normalizeEmail(e.target.value))}
        required
      />

      <Input
        placeholder='Telefone'
        value={phone}
        onChange={(e) => setPhone(phoneMask(e.target.value))}
        maxLength={15} // (xx) xxxxx-xxxx
        required
      />

      <Button variant={editingContact ? 'edit' : 'default'}>
        {editingContact ? 'Salvar alterações' : 'Adicionar contato'}
      </Button>
    </Form>
  );
}
