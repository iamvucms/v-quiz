import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../constants';
const {height, width} = Layout.window;
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: height * 0.3,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
  },
  btnBack: {
    paddingHorizontal: 15,
  },
  questionContainer: {
    height: 200,
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    marginTop: -100,
    borderRadius: 15,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  questionAnalysis: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  analysisLine: {
    height: 8,
    width: 50,
    borderRadius: 99,
    marginHorizontal: 10,
    backgroundColor: Colors.successDark,
  },
  questionContent: {
    flex: 1,
  },
  circleContainer: {
    height: 65,
    width: 65,
    borderRadius: 99,
    marginTop: -30,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
  },
  countdown: {
    position: 'absolute',
    color: Colors.secondary,
    fontFamily: 'BioRhyme-ExtraBold',
  },
  question: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerItem: {
    width: width * 0.8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1.5,
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    borderColor: Colors.warm_gray,
  },
  answerCircle: {
    height: 20,
    width: 20,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.warm_gray,
    borderWidth: 1.5,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNextContainer: {
    borderColor: Colors.primary,
    borderWidth: 1.5,
    borderRadius: 99,
    padding: 5,
  },
  btnNext: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 99,
    backgroundColor: Colors.primary,
  },
  alNum: {
    width: 20,
  },
});
