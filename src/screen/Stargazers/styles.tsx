import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  item: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  numberRecords: {
    flexDirection: 'row',
  },
  viewSearchEnter: {
    borderWidth: 1,
    flex: 1,
  },
  buttonSearch: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  boxSearch: {
    flexDirection: 'row',
    marginTop: 30,
  },
  textSearchEnter: {
    fontSize: 16,
  },
  textSearchButton: {
    color: 'white',
  },
});
export default styles;
