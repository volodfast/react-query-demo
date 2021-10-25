import { FC } from 'react';
// interfaces
import { CharacterListItemProps } from './CharacterListItem.interfaces';
// styles
import { CharacterListItemContainer } from './CharacterListItem.styled';

const CharacterListItem: FC<CharacterListItemProps> = ({ item }) => {
  return (
    <CharacterListItemContainer>
      {`Name: ${item.name}`}
    </CharacterListItemContainer>
  );
};

export default CharacterListItem;
