import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../constants';
const {width} = Layout.window;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  btnBack: {
    padding: 10,
  },
  settingsContainer: {
    flex: 1,
    marginTop: 15,
  },
  settingGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  settingIcon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white50,
    borderRadius: 99,
    marginRight: 10,
  },
  sliderContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white50,
    height: 50,
    borderRadius: 99,
    justifyContent: 'center',
  },
  settingQuestionType: {
    marginHorizontal: 20,
  },
  questionTypes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  questionType: {
    width: (width - 60) / 2,
    backgroundColor: Colors.white50,
    padding: 10,
    borderRadius: 10,
    height: 110,
    borderWidth: 2,
    borderColor: Colors.white50,
  },
  btnSave: {
    height: 50,
    width: width - 40,
    marginHorizontal: 20,
    backgroundColor: Colors.secondary,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnUpgrade: {
    height: 50,
    width: width - 40,
    marginHorizontal: 20,
    backgroundColor: Colors.white75,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  bothQuestionType: {
    width: width - 40,
    backgroundColor: Colors.white50,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 2,
    borderColor: Colors.white50,
  },
});
