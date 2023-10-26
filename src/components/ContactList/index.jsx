import ContactListItem from './ContactListItem';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import CardLoading from 'components/CardLoading';
import { Grid } from '@mui/material';
import { List } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Grid item xs={12} md={6}>
        <List>
          {contacts.map(contact => (
            <div key={contact.id}>
              <ContactListItem contact={contact} />
            </div>
          ))}
        </List>
      </Grid>

      {isLoading && <CardLoading />}
    </>
  );
}