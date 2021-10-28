import { FC } from 'react';
// interfaces
import { LocationListProps } from './LocationList.interface';
// styles
import { LocationListContainer } from './LocationList.styled';

const LocationList: FC<LocationListProps> = ({ list }) => {
  return (
    <LocationListContainer>
      <h3>Location list</h3>

      {list.map((location) => {
        return (
          <div key={location.id}>
            <div>Id: {location.id}</div>
            <div>Name: {location.name}</div>
            <div>Type: {location.type}</div>
          </div>
        );
      })}
    </LocationListContainer>
  );
};

export default LocationList;
