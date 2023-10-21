import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { PatternFormat } from 'react-number-format';
import { StyledForm } from './UserForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const numericTel = phone.replace(/\D/g, '');

    if (!name || numericTel.length < 12) {
      toast.warn('Please, enter valid information');
      return;
    }

    const newContact = {
      name,
      phone,
    };

    dispatch(addContact(newContact));
    form.reset();
    setPhone('');
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <PatternFormat
        format="+38 (###) ### ####"
        allowEmptyFormatting
        mask="_"
        name="tel"
        value={phone}
        onValueChange={values => {
          setPhone(values.formattedValue);
        }}
      />
      <button>Add</button>
    </StyledForm>
  );
}