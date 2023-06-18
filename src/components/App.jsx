import { useGetContactsQuery } from 'redux/Api';
import { GlobalStyle } from './GlobalStyle';
import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Layout } from './Layout/Layout';
import Filter from './Filter/Filter';
import { Spinner } from './Spinner/Spinner';

export function App() {
  const { data, isFetching } = useGetContactsQuery();
  const showContactList = data && !isFetching && data.length > 0;
  const showText = data && data.length === 0 && !isFetching;

  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <FormContact />
        <h2>Contacts</h2>
        <Filter />
        {showContactList ? <ContactList /> : <Spinner />}
        {showText && (
          <p style={{ textAlign: 'center' }}>Don't have contacts...</p>
        )}
      </div>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
