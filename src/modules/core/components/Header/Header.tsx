import { FC } from 'react';
import { Link } from 'react-router-dom';
// styles
import { HeaderContainer, MenuList } from './Header.styled';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <MenuList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/form?hello=true">Form with search</Link>
        </li>
      </MenuList>
    </HeaderContainer>
  );
};

export default Header;
