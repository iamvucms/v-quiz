import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMenu: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 99,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainMenu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 150,
  },
});
