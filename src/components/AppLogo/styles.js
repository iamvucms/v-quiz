import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    bottom: 30,
    height: 5,
    width: '90%',
    alignSelf: 'center',
    marginHorizontal: 20,
    backgroundColor: Colors.white,
  },
});
