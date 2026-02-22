import { useDispatch } from 'react-redux';
import {
  removeContact,
  startEditContact,
} from '../features/contacts/contactsSlice';
import type { Contact } from '../features/contacts/types';
import { Button } from './ContactForm.styles';
import { Actions, Card } from './ContactItem.styles';

interface Props {
  contact: Contact;
}

export default function ContactItem({ contact }: Props) {
  const dispatch = useDispatch();

  return (
    <Card>
      <strong>{contact.fullName}</strong>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>

      <Actions>
        <Button
          variant='edit'
          onClick={() => dispatch(startEditContact(contact))}
        >
          Editar
        </Button>

        <Button
          variant='danger'
          onClick={() => dispatch(removeContact(contact.id))}
        >
          Remover
        </Button>
      </Actions>
    </Card>
  );
}
