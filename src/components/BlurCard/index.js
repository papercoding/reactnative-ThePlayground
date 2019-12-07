import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import CustomText from '../CustomText';
import {scale} from 'react-native-size-matters';
import TextStyles from '../../themes/TextStyles';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import FastImage from 'react-native-fast-image';
import {withTheme} from 'react-native-paper';

const BlurCard = ({containerStyle, theme, item, index, onPress}) => {
  const {title, imageSource} = item;
  const blurType = theme.dark ? 'dark' : 'regular';

  const onBlurItemPress = () => {
    onPress(index);
  };

  return (
    <TouchableBounce style={[styles.container, containerStyle]} onPress={onBlurItemPress}>
      {Platform.OS === 'ios' ? (
        <BlurView style={styles.blurView} blurType={blurType} />
      ) : (
        <View style={[styles.bgView, {backgroundColor: theme.dark ? 'black' : 'white'}]} />
      )}
      <FastImage style={styles.image} source={imageSource} resizeMode="contain" />
      <CustomText style={styles.title}>{title}</CustomText>
    </TouchableBounce>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(32),
    paddingBottom: scale(32),
    marginBottom: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: scale(24),
  },
  bgView: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: scale(24),
    opacity: 0.6,
  },
  image: {
    width: scale(64),
    height: scale(64),
  },
  title: {
    marginTop: scale(16),
    ...TextStyles.subheading,
  },
});

export default withTheme(BlurCard);