import PropTypes from 'prop-types';
import { Container, Main } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
