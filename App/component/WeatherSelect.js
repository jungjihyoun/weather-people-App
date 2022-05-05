import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import {width, images, fonts} from '../styles/globalStyles';

const WeatherSelect = () => {
  const [isSelect, setIsSelect] = useState(false)

  return (
    <View style={ isSelect ? {...styles.WeatherSelect, paddingBottom : 20 } : styles.WeatherSelect} >
      <TouchableOpacity style={styles.SelectArea} onPress={() => setIsSelect((status) => !status)}>
        <Text style={styles.SelectText}>서초구 반포3동</Text>
        <Image
          source={images.right}
          style={ isSelect ? {...styles.InputIcon , transform: [{ rotate: '270deg' }]} : styles.InputIcon}
        />
      </TouchableOpacity>

      {isSelect &&
          <>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#DFDFDF'
              }}
            />
            <TouchableWithoutFeedback>
              <Text style={styles.listText}>서초구 반포3동</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.listText}>동작구 사당1동</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <Text style={styles.listText}>동네 추가하기</Text>
            </TouchableWithoutFeedback>
          </>
        }

    </View>
  );
};

const styles = StyleSheet.create({
  WeatherSelect:{
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    width: width * 343,
    marginBottom: 16,
  },
  SelectArea: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    width: width * 343,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  SelectText: {
    fontFamily: fonts.suitB,
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },

  listText: {
    fontFamily: fonts.suitB,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  InputIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 0,
    top: '10%',
    transform: [{ rotate: '90deg' }]
  },
});

export default WeatherSelect;

