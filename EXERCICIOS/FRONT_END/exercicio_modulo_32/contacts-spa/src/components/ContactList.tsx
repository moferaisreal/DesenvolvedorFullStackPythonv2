import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import ContactItem from './ContactItem';

export default function ContactList() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
