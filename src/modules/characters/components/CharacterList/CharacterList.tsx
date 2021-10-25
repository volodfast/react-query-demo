import { FC } from 'react';
// components
import CharacterListItem from './CharacterListItem';
// interfaces
import { CharacterListProps } from './CharacterList.interfaces';
// styles
import { CharacterListContainer } from './CharacterList.styled';

const CharacterList: FC<CharacterListProps> = ({ list }) => {
  return (
    <CharacterListContainer>
      {list.map((item) => {
        return <CharacterListItem key={item.id} item={item} />;
      })}
    </CharacterListContainer>
  );
};

export default CharacterList;
