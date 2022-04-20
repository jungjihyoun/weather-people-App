import useSWR from 'swr';
import {fetcherWithToken} from '../utils/fetcher';
import {GEO_API} from '../utils/API';

export default function useFetchGeo(longitude, latitude) {
  const {data, error} = useSWR(GEO_API(longitude, latitude), fetcherWithToken);

  return {
    userGeo: data,
    userGeoLoading: !error && !data,
    isError: error,
  };
}
