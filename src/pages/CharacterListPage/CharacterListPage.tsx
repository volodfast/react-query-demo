import React, { FC } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router';
// components
import CharacterList from 'modules/characters/components/CharacterList';
// hooks
import { useCharacterList } from 'modules/characters/hooks/useCharacterList';
// styles
import { CharacterListPageContainer } from './CharacterListPage.styled';

const CharacterListPage: FC = () => {
  const { pathname, search } = useLocation();
  const history = useHistory();

  const parsed = queryString.parse(search);
  const page: number = parseInt(parsed.page as string) || 1;

  const { isLoading, isFetching, isError, data } = useCharacterList({ page });

  const handleClickPrev = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    const search = queryString.stringify({
      page: page - 1,
    });

    history.push({
      pathname: pathname,
      search,
    });
  };

  const handleClickNext = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    const search = queryString.stringify({
      page: page + 1,
    });

    history.push({
      pathname: pathname,
      search,
    });
  };

  return (
    <CharacterListPageContainer>
      <h1>Character List Page</h1>
      {isLoading ? (
        'Loading...'
      ) : isError ? (
        'There is an error! Try again later!'
      ) : data ? (
        <div>
          <CharacterList list={data.results} />
          <div>
            <button
              onClick={handleClickPrev}
              disabled={isFetching || !data.info.prev}
            >
              Prev
            </button>
            <span>{` ${page} `}</span>
            <button
              onClick={handleClickNext}
              disabled={isFetching || !data.info.next}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </CharacterListPageContainer>
  );
};

export default CharacterListPage;
