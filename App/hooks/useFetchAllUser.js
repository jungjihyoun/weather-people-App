import useSWR from 'swr';
import {graphqlFetcher} from '../utils/fetcher';
import {GET_USER} from '../graphql/USER';

export default function useFetchAllUser() {
  const {data, error} = useSWR(GET_USER, graphqlFetcher);

  return {
    user: data,
    userLoading: !error && !data,
    isError: error,
  };
}
