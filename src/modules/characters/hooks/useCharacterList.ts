import axios from 'axios';
import { useQuery } from 'react-query';
// interfaces
import { ApiListResponse } from 'modules/core/core.interfaces';
import { Character } from '../character.interfaces';

const fetchCharacterList = ({ page }: { page: number }) =>
  axios
    .get<ApiListResponse<Character[]>>(
      `https://rickandmortyapi.com/api/character?page=${page}`
    )
    .then((res) => res.data);

export const useCharacterList = ({ page }: { page: number }) => {
  return useQuery(
    ['characters', 'page', page],
    () => fetchCharacterList({ page }),
    {
      keepPreviousData: true,
    }
  );
};
