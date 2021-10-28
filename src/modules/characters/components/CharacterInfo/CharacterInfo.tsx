import { FC } from 'react';
// interfaces
import { CharacterInfoProps } from './CharacterInfo.interfaces';
// styles
import { CharacterInfoContainer } from './CharacterInfo.styled';

const CharacterInfo: FC<CharacterInfoProps> = ({ character }) => {
  return (
    <CharacterInfoContainer>
      <h2>Character Info</h2>
      <div>
        <span>Name: </span>
        <span>{character.name}</span>
      </div>
      <div>
        <span>Status: </span>
        <span>{character.status}</span>
      </div>
      <div>
        <span>Gender: </span>
        <span>{character.gender}</span>
      </div>
      <div>
        <span>Image: </span>
        <img src={character.image} alt={`${character.name}`} />
      </div>
    </CharacterInfoContainer>
  );
};

export default CharacterInfo;
