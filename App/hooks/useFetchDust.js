import useSWR from 'swr';
import {fetcher, fetcherWithToken} from '../utils/fetcher';
import {DUST_API} from '../utils/API';
import {GEO_API} from '../utils/API';
import {handleSido} from '../utils/SIDO';

export default function useFetchDust(longitude, latitude) {
  const {data: geo, error: geoErr} = useSWR(
    GEO_API(longitude, latitude),
    fetcherWithToken,
  );

  const {data: dust, error: dustErr} = useSWR(
    () => DUST_API(handleSido(geo.documents[0].region_1depth_name)),
    fetcher,
  );

  return {
    dust: dust,
    dustErr: dustErr,
  };
}
