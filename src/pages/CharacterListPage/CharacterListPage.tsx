import { FC } from 'react';
// components
import CharacterList from 'modules/characters/components/CharacterList';
// hooks
import { useCharacterList } from 'modules/characters/hooks/useCharacterList';
// styles
import { CharacterListPageContainer } from './CharacterListPage.styled';

const CharacterListPage: FC = () => {
  const { isLoading, isError, data } = useCharacterList();

  return (
    <CharacterListPageContainer>
      <h1>Character List Page</h1>
      {isLoading ? (
        'Loading...'
      ) : isError ? (
        'There is an error! Try again later!'
      ) : data ? (
        <CharacterList list={data.results} />
      ) : null}
    </CharacterListPageContainer>
  );
};

export default CharacterListPage;
