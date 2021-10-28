import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
// interfaces
import { ApiListResponse } from 'modules/core/core.interfaces';
import { Location } from '../location.interfaces';

const fetchLocationList = ({ pageParam = 1 }) => {
  return axios
    .get<ApiListResponse<Location[]>>(
      `https://rickandmortyapi.com/api/location?page=${pageParam}`
    )
    .then((res) => res.data);
};

export const useLocationList = () => {
  return useInfiniteQuery('locations', fetchLocationList, {
    getNextPageParam: (lastPage, pages) =>
      lastPage.info.next && pages.length + 1,
  });
};
