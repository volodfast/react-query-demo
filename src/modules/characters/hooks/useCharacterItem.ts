import axios from 'axios';
import { useQuery } from 'react-query';
// interfaces
import { Character } from '../character.interfaces';

const fetchCharacter = (id: number) =>
  axios
    .get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data);

export const useCharacterItem = (id: number) => {
  return useQuery(['character', id], () => fetchCharacter(id), {
    enabled: !!id,
  });
};
