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

// function MyProjects () {
//   const { data: user } = useSWR('/api/user')
//   const { data: projects } = useSWR(() => '/api/projects?uid=' + user.id)
//   // 함수를 전달할 때, SWR은 반환 값을 `key`로 사용합니다.
//   // 함수가 falsy를 던지거나 반환한다면,
//   // SWR은 일부 의존성이 준비되지 않은 것을 알게 됩니다.
//   // 이 예시의 경우 `user.id`는 `user`가 로드되지 않았을 때
//   // 에러를 던집니다.

//   if (!projects) return 'loading...'
//   return 'You have ' + projects.length + ' projects'
// }
