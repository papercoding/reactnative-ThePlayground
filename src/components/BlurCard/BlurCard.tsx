import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import FastImage, {FastImageSource} from 'react-native-fast-image';
import {withTheme} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
//@ts-ignore
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {IThemeMode} from '../../themes/Colors/types';
import TextStyles from '../../themes/TextStyles';
import ThemedText from '../CustomText/CustomText';
import {HandlerFunction} from '@storybook/addon-actions';

type Props = {
  containerStyle: object;
  theme: IThemeMode;
  title: string;
  imageSource: number | FastImageSource;
  onPress?: () => void | HandlerFunction;
};

const BlurCard: React.FC<Props> = ({containerStyle, theme, title, imageSource, onPress}) => {
  const blurType = theme.dark ? 'dark' : 'light';

  const onBlurItemPress = () => {
    onPress && onPress();
  };

  return (
    <TouchableBounce style={[styles.container, containerStyle]} onPress={onBlurItemPress}>
      {Platform.OS === 'ios' ? (
        <BlurView style={styles.blurView} blurType={blurType} />
      ) : (
        <View style={[styles.bgView, {backgroundColor: theme.dark ? 'black' : 'white'}]} />
      )}
      <FastImage style={styles.image} source={imageSource} resizeMode="contain" />
      <ThemedText style={styles.title}>{title}</ThemedText>
    </TouchableBounce>
  );
};

const styles = StyleSheet.create({
  container: {
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
