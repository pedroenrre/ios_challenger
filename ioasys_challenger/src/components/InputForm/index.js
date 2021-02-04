import React from 'react';
import {TextInput, Text} from 'react-native';

import styles from './styles';

const InputForm = ({label, forwardRef, ...rest}) => (
  <>
    <Text style={styles.Inputlabel}>{label}</Text>
    <TextInput ref={forwardRef} style={styles.InputBox} {...rest} />
  </>
);

export default InputForm;
