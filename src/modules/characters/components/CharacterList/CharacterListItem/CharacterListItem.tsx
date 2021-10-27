import { FC } from 'react';
import { Link } from 'react-router-dom';
// interfaces
import { CharacterListItemProps } from './CharacterListItem.interfaces';
// styles
import { CharacterListItemContainer } from './CharacterListItem.styled';

const CharacterListItem: FC<CharacterListItemProps> = ({ item }) => {
  return (
    <CharacterListItemContainer>
      <div>{`Name: ${item.name}`}</div>
      <div>
        <Link to={`/characters/${item.id}`}>Link</Link>
      </div>
    </CharacterListItemContainer>
  );
};

export default CharacterListItem;
