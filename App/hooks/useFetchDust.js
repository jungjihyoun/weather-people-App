import useSWR from 'swr';
import {fetcher} from '../utils/fetcher';
import {DUST_API} from '../utils/API';

export default function useShortWeather(longitude, latitude, date, time) {
  const {data, error} = useSWR(
    DUST_API(longitude, latitude, date, time),
    fetcher,
  );

  return {
    dust: data,
    dustLoading: !error && !data,
    isError: error,
  };
}
