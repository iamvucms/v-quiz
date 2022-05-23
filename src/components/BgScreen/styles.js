import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  bgContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -99,
    backgroundColor: Colors.primary,
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
  },
  shape: {
    position: 'absolute',
    zIndex: -1,
    opacity: 0.4,
  },
  squareAnimation: {
    height: 120,
    width: 120,
    borderRadius: 20,
    backgroundColor: Colors.yellow,
  },
  circleAnimation: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
});
