import axios from 'axios';
import { useQuery } from 'react-query';
// interfaces
import { ApiListResponse } from 'modules/core/core.interfaces';
import { Character } from '../character.interfaces';

export const useCharacterList = () => {
  return useQuery('characters', () =>
    axios
      .get<ApiListResponse<Character[]>>(
        'https://rickandmortyapi.com/api/character'
      )
      .then((res) => res.data)
  );
};
