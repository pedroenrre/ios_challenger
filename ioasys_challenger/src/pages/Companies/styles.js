import {StyleSheet} from 'react-native';

import {FontsColors, Primary, Others} from '~/helpers/palette';

const styles = StyleSheet.create({
  Container: {
    color: Others.background,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  LogoNameRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  LogoContainer: {
    width: 150,
    height: 90,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  Logo: {
    width: '100%',
    height: '100%',
  },
  CompanyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Primary.Blue,
  },
  CompanyLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: FontsColors.Medium,
  },
});

export default styles;
