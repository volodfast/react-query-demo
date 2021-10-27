import axios from 'axios';
import { useQuery } from 'react-query';
// interfaces
import { Character } from '../character.interfaces';

export const useCharacterItem = (id: number) => {
  return useQuery(
    ['character', id],
    () =>
      axios
        .get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.data),
    {
      enabled: !!id,
    }
  );
};
