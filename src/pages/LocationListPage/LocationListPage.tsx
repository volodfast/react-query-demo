import { FC, useMemo } from 'react';
// components
import LocationList from 'modules/location/components/LocationList';
// hooks
import { useLocationList } from 'modules/location/hooks/useLocationList';
// styles
import { LocationListPageContainer } from './LocationListPage.styled';

const LocationListPage: FC = () => {
  const {
    data,
    fetchNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    isError,
    hasNextPage,
  } = useLocationList();

  const locationList = useMemo(() => {
    if (data?.pages) {
      return data.pages.flatMap((page) => page.results);
    }

    return [];
  }, [data]);

  return (
    <LocationListPageContainer>
      <h1>Location List Page</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error!</p>
      ) : data ? (
        <div>
          <LocationList list={locationList} />
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching || isFetchingNextPage}
          >
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
