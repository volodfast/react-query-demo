import { FC } from 'react';
import { useParams } from 'react-router';
// components
import CharacterInfo from 'modules/characters/components/CharacterInfo';
// hooks
import { useCharacterItem } from 'modules/characters/hooks/useCharacterItem';
// interfaces
import { CharacterShowPageProps } from './CharacterShowPage.interfaces';
// styles
import { CharacterShowPageContainer } from './CharacterShowPage.styled';

const CharacterShowPage: FC<CharacterShowPageProps> = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data } = useCharacterItem(+id);

  return (
    <CharacterShowPageContainer>
      <h1>Character Page</h1>
      {isLoading ? (
        'Loading...'
      ) : isError ? (
        'There is an error! Try again later!'
      ) : data ? (
        <CharacterInfo character={data} />
      ) : null}
    </CharacterShowPageContainer>
  );
};

export default CharacterShowPage;
