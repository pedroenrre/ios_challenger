import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderComponent = ({leftButtonAction, title}) => (
  <View style={styles.Header}>
    <View style={styles.HeaderBody}>
      <TouchableOpacity
        onPress={() => {
          leftButtonAction();
        }}
        transparent>
        <Icon style={styles.HeaderMenuButtomIcon} name="keyboard-backspace" />
      </TouchableOpacity>
      <Text style={styles.HeaderTitle}>{title}</Text>
    </View>
  </View>
);

HeaderComponent.propTypes = {
  leftButtonAction: PropTypes.func,
  title: PropTypes.string.isRequired,
};

HeaderComponent.defaultProps = {
  leftButtonAction: () => {},
};

export default HeaderComponent;
