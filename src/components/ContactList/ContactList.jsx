import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/Api';
import { useDeleteContactMutation } from 'redux/Api';

import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { ListBtn } from './ContactList.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { warningMsg } from 'utilities/toast';

export const ContactListItems = () => {
  const filter = useSelector(getFilter);
  const { data, isFetching } = useGetContactsQuery();

  return (
    <>
      {!isFetching &&
        data
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(item => {
            return <ContactList key={item.id} item={item} />;
          })}
      <ToastContainer />
    </>
  );
};

export const ContactList = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  if (!item) {
    return null;
  }

  return (
    <List>
      return (
      <ListItem>
        <span>{item.name}</span>
        <span>{item.phone}</span>
        <ListBtn
          type="button"
          disabled={isLoading}
          onClick={() => {
            deleteContact(item.id);
            warningMsg(item.name);
          }}
        >
          Delete contact
        </ListBtn>
      </ListItem>
      );
    </List>
  );
};
