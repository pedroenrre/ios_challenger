import {StyleSheet} from 'react-native';
// import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Primary} from '~/helpers/palette';

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Primary.Blue,
    width: '100%',
    height: 60,
    elevation: 0,
    paddingHorizontal: 5,
    // position: 'absolute',
    // top: 0,
  },
  HeaderMenuButtomIcon: {
    color: '#FFF',
    fontSize: 35,
    backgroundColor: Primary.Blue,
  },
  HeaderTitle: {
    flex: 1,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 20,
  },
  HeaderBody: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emptyShareButtonView: {
    width: 35,
  },
});

export default styles;
