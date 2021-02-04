import {StyleSheet} from 'react-native';

import {FontsColors, Primary, Others} from '~/helpers/palette';

const styles = StyleSheet.create({
  Container: {
    color: Others.background,
    flex: 1,
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: 200,
    // marginBottom: 20,
  },
  LoginMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: FontsColors.Strong,
  },
  Button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: Primary.Blue,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  TextButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
