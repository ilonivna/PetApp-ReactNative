/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import styles from '../../../screen/Auth/styles';
import React from 'react';

interface IDefaultButton {
  disabled?: boolean;
  onPress: () => void;
  text: string;
}
export default function DefaultButton({
  disabled = false,
  onPress,
  text,
}: IDefaultButton) {
  return (
    <TouchableOpacity
      style={[styles.letsgoBtn, disabled && {opacity: 0.5}]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.letsgoText}>{text}</Text>
    </TouchableOpacity>
  );
}
