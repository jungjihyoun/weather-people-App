import React, { useEffect, useRef } from 'react';
import {StyleSheet , View , Modal , Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder} from 'react-native'
import {height} from "@/styles/globalStyles";

const WeatherModal = ({isModalOpen, onSetModal, children}) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });
  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });
  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });
  const panResponders = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: (event, gestureState) => {
      panY.setValue(gestureState.dy);
    },
    onPanResponderRelease: (event, gestureState) => {
      if(gestureState.dy > 0 && gestureState.vy > 1.5) {
        closeModal();
      }
      else {
        resetBottomSheet.start();
      }
    }
  })).current;

  useEffect(() => {
    if (isModalOpen) {
      resetBottomSheet.start();
    }
  }, [isModalOpen, resetBottomSheet]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      onSetModal(false)
    });
  };

  return (
      <Modal
        visible={isModalOpen}
        animationType="fade"
        transparent
        statusBarTranslucent>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.background} />
          </TouchableWithoutFeedback>

          <Animated.View style={{ transform: [{translateY: translateY}]}}
                         {...panResponders.panHandlers}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: height * 375,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
});

export default WeatherModal;
