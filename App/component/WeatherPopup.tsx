import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IProps {
  message: String;
  popup: boolean;
  setPopup: any;
}

const WeatherPopup = ({message, popup, setPopup}: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      setPopup(false);
    }, 3000);
  }, [popup]);

  return (
    <>
      {popup && (
        <View style={styles.popup}>
          <View style={styles.textWrapper}>
            <Text style={styles.popupText}>{message}</Text>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 300,
    height: 40,
    borderRadius: 30,
  },
  popupText: {
    fontSize: 12,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});

export default WeatherPopup;
