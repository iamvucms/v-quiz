import {StyleSheet} from 'react-native';
import {ColorSpace} from 'react-native-reanimated';
import {Colors, Layout} from '../../constants';
const {width} = Layout.window;
export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  subscriptionContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subscription: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  subscriptionItem: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 45) / 3,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  titleContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubscription: {
    marginTop: 15,
    width: '80%',
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnRestore: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});
