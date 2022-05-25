import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  btnBack: {
    padding: 10,
  },
  categoriesContainer: {
    flex: 1,
    marginTop: 10,
  },
  categoryItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryItem: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    height: 126,
    justifyContent: 'space-between',
  },
  categoryImage: {
    width: 48,
    height: 48,
    marginBottom: 7,
  },
  categoryName: {
    alignSelf: 'flex-end',
  },
});
