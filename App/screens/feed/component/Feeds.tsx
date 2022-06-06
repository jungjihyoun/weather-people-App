import React from 'react';
import {StyleSheet} from 'react-native';
import Feed from '../component/Feed'
import {fonts} from '@/styles/globalStyles';
import {IMyOutfits} from '@/type/upload'
import useFetchRecord from "@/hooks/useFetchRecord";

const Feeds = () => {
  const {record} = useFetchRecord();

  return (
    record.allRecord.map((e : IMyOutfits) => <Feed title={e.title} content={e.content} image={e.image[0]} key={e.title}/>)
  )
};

const styles = StyleSheet.create({
  tempText: {
    fontFamily: fonts.suitB,
    color: '#111111',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 50,
    marginRight: 10,
  },
  areaText: {
    fontFamily: fonts.suitB,
    color: '#111111',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  dustText: {
    fontFamily: fonts.suitM,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 10,
    marginRight: 5
  },
});


export default Feeds;

