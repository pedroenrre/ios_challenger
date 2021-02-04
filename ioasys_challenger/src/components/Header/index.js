import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const HeaderComponent = ({
  showLeftButton,
  leftButtonAction,
  showRightButton,
  rightButtonAction,
  title,
}) => (
  <View style={styles.Header}>
    <View style={styles.HeaderBody}>
      {showLeftButton && (
        <TouchableOpacity
          onPress={() => {
            leftButtonAction();
          }}
          transparent>
          <Icon style={styles.HeaderMenuButtomIcon} name="keyboard-backspace" />
        </TouchableOpacity>
      )}
      <Text style={styles.HeaderTitle}>{title}</Text>
      {showRightButton && (
        <TouchableOpacity
          onPress={() => {
            rightButtonAction();
          }}
          transparent>
          <Icon style={styles.HeaderMenuButtomIcon} name="exit-to-app" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

HeaderComponent.propTypes = {
  showLeftButton: PropTypes.bool,
  leftButtonAction: PropTypes.func,
  showRightButton: PropTypes.bool,
  rightButtonAction: PropTypes.func,
  title: PropTypes.string.isRequired,
};

HeaderComponent.defaultProps = {
  showLeftButton: false,
  leftButtonAction: () => {},
  showRightButton: false,
  rightButtonAction: () => {},
};

export default HeaderComponent;
