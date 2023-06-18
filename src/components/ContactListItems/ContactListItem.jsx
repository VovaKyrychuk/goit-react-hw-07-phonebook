import { warningMsg } from 'utilities/toast';
import { Spinner } from 'components/Spinner/Spinner';
import { FaWindowClose } from 'react-icons/fa';
import { useDeleteContactMutation } from 'redux/Api';

import { ListBtn, ListItem } from 'components/ContactList/ContactList.styled';

export const ContactListItem = ({ item }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem>
      <div>
        <span>{item.name}</span>
        <span>{item.phone}</span>
      </div>
      <ListBtn
        type="button"
        disabled={isLoading}
        onClick={() => {
          deleteContact(item.id);
          warningMsg(item.name);
        }}
      >
        {isLoading ? <Spinner /> : <FaWindowClose />}
      </ListBtn>
    </ListItem>
  );
};
