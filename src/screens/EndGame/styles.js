import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../constants';
const {height, width} = Layout.window;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.5,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreContainer: {
    padding: 30,
    borderRadius: 999,
    backgroundColor: Colors.white25,
  },
  score: {
    height: 120,
    width: 120,
    borderRadius: 99,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    alignSelf: 'center',
    flexWrap: 'wrap',
    backgroundColor: Colors.white,
    marginTop: -80,
    borderRadius: 40,
  },
  summaryItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.4,
    height: 80,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingTop: 100,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAction: {
    marginBottom: 5,
    height: 50,
    width: 50,
    borderRadius: 99,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
