import { useDispatch } from 'react-redux';
import { removeContact } from '../features/contacts/contactsSlice';
import type { Contact } from '../features/contacts/types';

interface Props {
  contact: Contact;
}

export default function ContactItem({ contact }: Props) {
  const dispatch = useDispatch();

  return (
    <div className='bg-surface rounded-2xl p-6 shadow-lg border border-secondary/20 hover:scale-[1.02] transition transform duration-300'>
      <div className='mb-4'>
        <p className='text-lg font-bold text-primary'>{contact.fullName}</p>
        <p className='text-textSecondary text-sm'>{contact.email}</p>
        <p className='text-textSecondary text-sm'>{contact.phone}</p>
      </div>

      <div className='flex gap-3'>
        <button className='flex-1 bg-accent text-white py-2 rounded-lg hover:opacity-80 transition'>
          Editar
        </button>

        <button
          onClick={() => dispatch(removeContact(contact.id))}
          className='flex-1 bg-danger text-white py-2 rounded-lg hover:opacity-80 transition'
        >
          Remover
        </button>
      </div>
    </div>
  );
}
