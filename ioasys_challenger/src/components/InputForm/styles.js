import {StyleSheet} from 'react-native';

import {FontsColors} from '~/helpers/palette';

const styles = StyleSheet.create({
  Inputlabel: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: FontsColors.Blue,
    alignSelf: 'flex-start',
  },
  InputBox: {
    width: '100%',
    backgroundColor: '#fff',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: FontsColors.Strong,
  },
});

export default styles;
