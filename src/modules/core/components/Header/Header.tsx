import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Header;
