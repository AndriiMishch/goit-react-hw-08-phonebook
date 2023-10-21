import ContactFilter from 'components/Filter';
import ContactListItem from './UserListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts, selectContactsLoading } from 'redux/selectors';
import { InfinitySpin } from 'react-loader-spinner';

import { StyledList } from './UserList.styled';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsLoading);

  return (
    <>
      <ContactFilter />
      {isLoading && <InfinitySpin width="200" color="#4fa94d" />}
      {contacts.length > 0 && (
        <StyledList>
          {contacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
        </StyledList>
      )}
    </>
  );
}
