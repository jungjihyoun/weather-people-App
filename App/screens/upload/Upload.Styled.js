//TopSection
import styled from "styled-components/native/dist/styled-components.native.esm";
import {Image, ScrollView, Text, View } from "react-native";
import {colors, fonts, height , width} from "../../styles/globalStyles";

export const Container = styled(ScrollView)`
  height: 100%;
  width: 100%;
  background: ${colors.white};
`;

export const TopLayout = styled(View)`
  width: 100%;
  height: ${height * 120}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${height * 56}px 22px 0 20px;
`;

export const IconImage = styled(Image)`
  width: ${props => props.width}
  height: ${props => props.width}
  transform: rotate(180deg);
`;

export const CustomText = styled(Text)`
  font-family: ${fonts.suitB}
  font-size: ${props => props.size || '12px'} 
  font-weight: ${props => props.weight || 400} 
  margin-bottom: ${props => props.bottom || 0}px;
  color: ${props => props.color || '#000000'} 
`;

// ImageSlides
export const ImageWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #97CAE5
`;
