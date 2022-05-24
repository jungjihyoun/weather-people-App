import useSWR from 'swr';
import {fetcher} from '@/utils/fetcher';
import {Short_Weather_API} from '@/utils/API';

export default function useShortWeather(longitude, latitude, date, time) {
  const {data, error} = useSWR(
    Short_Weather_API(longitude, latitude, date, time),
    fetcher,
  );

  return {
    shortWeather: data,
    shortWeatherLoading: !error && !data,
    isError: error,
  };
}
