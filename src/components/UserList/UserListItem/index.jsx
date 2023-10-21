import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <span>{contact.name}</span>
      <span>{contact.phone}</span>
      <button type="button" onClick={() => handleDelete(contact.id)}>
        Delete
      </button>
    </>
  );
}