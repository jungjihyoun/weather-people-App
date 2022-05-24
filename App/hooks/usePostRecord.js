import {useSWRConfig} from 'swr'
import {graphqlFetcher} from '@/utils/fetcher';
import {CREATE_RECORD} from '@/graphql/Record';

export default function usePostRecord(title , content , myOutfits) {
  const { mutate } = useSWRConfig()

  // 로컬 데이터를 즉시 업데이트하지만, 갱신은 비활성화
  mutate(CREATE_RECORD(title,  content, myOutfits), { ...data, title: title ,  content :content , myOutfits :myOutfits}, false)



  // mutate(CREATE_RECORD(title,  content, myOutfits ) , graphqlFetcher );

}
