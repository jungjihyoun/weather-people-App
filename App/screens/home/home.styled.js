import styled, {css} from 'styled-components/native';
import {Text, SafeAreaView, ScrollView, Image, View} from 'react-native';
import {colors, height, width, fonts} from '../../styles/globalStyles';

// WeatherBoard
export const Container = styled(ScrollView)`
  height: 100%;
  width: 100%;
`;

export const WeatherBoardLayout = styled(View)`
  background: ${colors.white};
  padding-bottom: 24px;
`;

export const WeatherCard = styled(View)`
  width: 90%;/.
  height: 445px;
  margin: 0 auto;
  background: #ffffff;
  border: 1.5px solid #eeeeee;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
`;

export const WeatherImage = styled(Image)`
  margin: 0 auto;
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
  justify-content: space-evenly;
  align-items: center;
  padding: 0 ${width * 75}px;
`;

export const Column = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 0 10px 0 0;
`;

export const RowGap = styled(View)`
  width: 70px
  font-size: ${props => props.size || '12px'} 
  font-weight: ${props => props.weight || 400} 
  display: flex;
  flex-direction: row
  justify-content: space-between;
  align-items: center;
`;

export const CommentArea = styled(View)`
  height: 73px;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled(View)`
  width: 319px;
  height: 1.5px;
  background: #eeeeee;
  margin: 5px auto;
`;

export const BottomArea = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  justify-content: space-evenly;
`;

export const DetailItem = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//TopSection
export const TopLayout = styled(View)`
  width: 100%;
  height: ${height * 120}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${height * 66}px 20px 0 20px;
  background: ${colors.white};
`;

export const IconText = styled(Text)`
  background: #262626;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 6px 20px;
  width: 176px
  height: 35px;
  color : white;
  font-family: ${fonts.suitB};
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.506818px;
  overflow:hidden;
  margin-bottom: 12px;
`;

export const ImageWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const IconImage = styled(Image)`
  width: ${props => props.width}
  height: ${props => props.width}
`;

export const CustomText = styled(Text)`
  font-family: ${fonts.suitB}
  font-size: ${props => props.size || '12px'} 
  font-weight: ${props => props.weight || 400} 
  margin-bottom: ${props => props.bottom || 0}px
  color: ${props => props.color || '#000000'} 
`;

// OutfitPhotos
export const OutfitPhotosLayout = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px 0;
`;

export const OutfitSubTitle = styled.Text`
  font-family: ${fonts.YdeB};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.734615px;
`;

export const OutfitTitle = styled.Text`
  font-family: ${fonts.YdeB};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -1.07135px;
  text-align: center;
`;

export const OutfitBorder = styled.View`
  width: 184px;
  height: 42px;
  background: ${colors.prPink};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  margin: 10px 0 36px 0;
`;

export const OutfitTextArea = styled.View`
  max-width: 198px;
  min-height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Outfith1 = styled.Text`
  font-family: ${fonts.suitB};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const Outfith2 = styled.Text`
  height: 36px;
  font-family: ${fonts.suitM};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #808080;
  margin-top: 8px;
`;

export const OutfitImage = styled.Image`
  height: 34px;
  width: 34px;
  border-radius: 50px;
  background: pink;
  margin-right: 10px;
`;

export const OutfitRow = styled(View)`
  display: flex;
  flex-direction: row;
  margin: 0 auto 0 0;
  align-items: center;
`;

export const OutfitColumn = styled(View)`
  display: flex;
  flex-direction: column;
`;

export const OutfitImgWrapper = styled(View)`
  position: relative;
  height: 275;
  width: 197;
`;

export const OutfitImgId = styled(Text)`
  font-family: ${fonts.suitB};
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  position: absolute;
  bottom: 16px;
  left: 8px;
`;
