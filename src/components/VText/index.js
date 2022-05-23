import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../constants';
export const FontWeights = {
  100: 'BioRhyme-Light',
  200: 'BioRhyme-Light',
  300: 'BioRhyme-ExtraLight',
  400: 'BioRhyme-ExtraLight',
  500: 'BioRhyme-Regular',
  600: 'BioRhyme-Regular',
  700: 'BioRhyme-Bold',
  800: 'BioRhyme-ExtraBold',
  900: 'BioRhyme-ExtraBold',
};
export const FontSizes = {
  normal: 16,
  small: 14,
  medium: 18,
  large: 20,
  h6: 24,
  h5: 28,
  h4: 32,
  h3: 36,
  h2: 40,
  h1: 44,
};
const FText = ({
  children,
  fontWeight = 500,
  fontSize = 'normal',
  color = Colors.typography,
  lineHeightRatio,
  lineHeight,
  style,
  align = 'left',
  ...restProps
}) => {
  const size = isNaN(fontSize) ? FontSizes[fontSize] : fontSize;
  const textStyles = {
    fontFamily: FontWeights[fontWeight],
    color,
    fontSize: size,
    ...(lineHeightRatio && {lineHeight: size * lineHeightRatio}),
    ...(lineHeight && {lineHeight}),
    textAlign: align,
  };
  return (
    <Text style={[styles.base, textStyles, style]} {...restProps}>
      {children}
    </Text>
  );
};

export default FText;

const styles = StyleSheet.create({
  base: {
    color: Colors.black,
  },
});
