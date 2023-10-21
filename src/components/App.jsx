import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './Section';
import ContactList from './UserList';
import ContactForm from './ContactForm';
import { useSelector } from 'react-redux';
import { selectContactsItems } from 'redux/selectors';
import { AppContainer } from './App.styled';
import { GlobalStyle } from './BaseStyles.styled';

import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(selectContactsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AppContainer>
        <Section title="Add contact">
          <ContactForm />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <ContactList />
          </Section>
        )}
        <GlobalStyle />
      </AppContainer>
      <ToastContainer />
    </>
  );
}