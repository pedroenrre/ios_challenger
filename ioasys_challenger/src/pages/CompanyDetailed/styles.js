import {StyleSheet} from 'react-native';

import {FontsColors, Primary, Others} from '~/helpers/palette';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    color: Others.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  companyNameView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  LogoContainer: {
    width: '100%',
    height: 250,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 10,
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
  DescriptionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: FontsColors.Strong,
    marginBottom: 5,
  },
  CompanyDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: FontsColors.Medium,
  },
});

export default styles;
