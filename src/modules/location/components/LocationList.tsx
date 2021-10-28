import { FC } from 'react';
// interfaces
import { LocationListProps } from './LocationList.interface';
// styles
import { LocationListContainer } from './LocationList.styled';

const LocationList: FC<LocationListProps> = () => {
  return <LocationListContainer>Location list container</LocationListContainer>;
};

export default LocationList;
