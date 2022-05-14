import {useSWRConfig} from 'swr'
import {graphqlFetcher} from '../utils/fetcher';
import {CREATE_RECORD} from '../graphql/Record';

export default function usePostRecord(title , content) {
  const { mutate } = useSWRConfig()

  mutate(CREATE_RECORD(title,  content),graphqlFetcher);

}
