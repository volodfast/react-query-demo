import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
// interfaces
import { Location } from '../location.interfaces';

const fetchLocationList: any = ({ page = 1 }) => {
  return axios
    .get<Location[]>(`https://rickandmortyapi.com/api/location?page=${page}`)
    .then((res) => res.data);
};

export const useLocationList = () => {
  return useInfiniteQuery('locations', fetchLocationList, {
    getNextPageParam: (lastPage, pages) => {
      console.log('lastPage', lastPage);
      console.log('pages', pages);
    },
  });
};
