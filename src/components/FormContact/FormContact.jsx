import { useState } from 'react';

import { Form } from './FormContact.styled';
import { FormLabel } from './FormContact.styled';
import { Button } from './FormContact.styled';
import { FormInput } from './FormContact.styled';

import { useGetContactsQuery, useAddContactMutation } from 'redux/Api';
import { Spinner } from 'components/Spinner/Spinner';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorMsg, succsessMsg } from 'utilities/toast';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    const names = data?.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      errorMsg(name);
      return;
    }
    const newContact = { name, phone };
    addContact(newContact);
    succsessMsg(name);
    setName('');
    setPhone('');
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormLabel htmlFor={name}>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor={phone}>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </FormLabel>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Add contact'}
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
};

// export default FormContact;
