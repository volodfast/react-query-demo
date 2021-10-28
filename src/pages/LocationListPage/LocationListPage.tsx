import { FC } from 'react';
// hooks
import { useLocationList } from 'modules/location/hooks/useLocationList';
// styles
import { LocationListPageContainer } from './LocationListPage.styled';

const LocationListPage: FC = () => {
  const { data, fetchNextPage, isLoading, isError, hasNextPage } =
    useLocationList();

  return (
    <LocationListPageContainer>
      <h1>Location List</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error!</p>
      ) : data ? (
        <div>
          {data.pages.map((page, i) => {
            return page.results.map((location) => {
              return (
                <div key={location.id}>
                  <div>Id: {location.id}</div>
                  <div>Name: {location.name}</div>
                  <div>Type: {location.type}</div>
                </div>
              );
            });
          })}
          <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
            Fetch Next
          </button>
        </div>
      ) : (
        <p>No data</p>
      )}
    </LocationListPageContainer>
  );
};

export default LocationListPage;
