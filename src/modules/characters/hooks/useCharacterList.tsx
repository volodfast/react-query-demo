import axios from 'axios';
import { useQuery } from 'react-query';

export const useCharacterList = () => {
  return useQuery('characters', () =>
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) => res.data)
  );
};
