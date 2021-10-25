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
          <Link to="characters">Characters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
