import axios from 'axios';
import { useQuery } from 'react-query';
// interfaces
import { ApiListResponse } from 'modules/core/core.interfaces';
import { Character } from '../character.interfaces';

export const useCharacterList = ({ page }: { page: number }) => {
  return useQuery(['characters', 'page', page], () =>
    axios
      .get<ApiListResponse<Character[]>>(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      .then((res) => res.data)
  );
};
