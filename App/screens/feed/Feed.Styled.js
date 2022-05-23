import styled from "styled-components/native/dist/styled-components.native.esm";
import {Image, ScrollView, Text, View } from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {colors, fonts, height , width} from "@/styles/globalStyles";

export const Container = styled(ScrollView)`
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

export const WeatherCard = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 120px;
  align-items: center;
  padding-left: 10px;
  background: #FFFFFF;
  border-radius: 14px;
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
  // justify-content: space-evenly;
  // align-items: center;
  // padding: 0 ${width * 75}px;
`;

export const Column = styled(View)`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //padding: 0 10px 0 0;
`;



export const Divider = styled(View)`
  width: 319px;
  height: 1.5px;
  background: #eeeeee;
  margin: 5px auto;
`;