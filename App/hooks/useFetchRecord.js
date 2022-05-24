import useSWR from 'swr';
import {graphqlFetcher} from '@/utils/fetcher';
import {ALL_RECORD} from '@/graphql/Record';

export default function useFetchRecord() {
  const {data, error ,mutate} = useSWR(ALL_RECORD, graphqlFetcher);

  return {
    record: data,
    recordLoading: !error && !data,
    mutate : mutate
  };
}
