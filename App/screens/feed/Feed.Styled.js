import styled from "styled-components/native/dist/styled-components.native.esm";
import {Image, ScrollView, Text, View , Button } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {colors, fonts, height , width} from "@/styles/globalStyles";

export const ScrollContainer = styled(ScrollView)`
  height: 100%;
  width: 100%;
  background: ${colors.white};
`;

export const TopLayout = styled(TouchableOpacity)`
  width: 100%;
  height: ${height * 120}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${height * 56}px 22px 0 5px;
  background: ${colors.white};
`;

export const IconImage = styled(Image)`
  width: ${props => props.width}
  height: ${props => props.width}
  transform: rotate(180deg);
`;

export const FeedImage = styled(Image)`
  width: 100%;
  height: 460px;
  background: pink;
`;

export const WeatherCard = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  align-items: center;
  padding-left: 10px;
  background: #FFFFFF;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  shadow-opacity: 0.7;
  shadow-radius: 10px;
  shadow-color: rgba(0, 0, 0, 0.04);
  shadow-offset: 0px 30px;
`;

export const WeatherImage = styled(Image)`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;
export const AreaName = styled(Text)`
  font-family: ${fonts.YdeB}
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const TitleArea = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 0;
`;

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const Column = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled(View)`
  width: 319px;
  height: 1.5px;
  background: #eeeeee;
  margin: 5px auto;
`;

export const FeedTitleRow =  styled(Row)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 16px;
`;

export const FeedContent = styled(View)`
  padding: 18px 16px;
`;

export const WeatherButton = styled(TouchableOpacity)`
  width: 48px;
  height: 48px;
  border-radius : 50px;
  border-width: 2px;
  border-color: #ffffff;
  background: #ffffff;
  border-style: solid;
  position: absolute;
  opacity: 0.7;
  bottom: 13px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;