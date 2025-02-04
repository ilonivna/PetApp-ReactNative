import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../../styles';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constant/screenNames';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackNavigation } from '../../../../navigation/types';

interface IAuthHeader {
  activeTab: 'login' | 'registration';
}
export default function AuthHeader({activeTab}: IAuthHeader) {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();

  const navigateToLogin = () => {
    navigation.navigate(ScreenNames.LOGIN_PAGE);
  };

  const navigateToRegister = () => {navigation.navigate(ScreenNames.REGISTRATION_PAGE)};
  ;

  return (
    <>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Welcome, {'\n'}a fellow pet lover!</Text>
        <Text style={styles.welcomeText}>
          Every human deserves a pet. We will help you find a fluffy friend.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
        onPress={navigateToLogin}
          style={activeTab === 'login' ? styles.activeTab : styles.disabledTab}>
          <Text style={styles.authText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={navigateToRegister}
          style={
            activeTab === 'registration' ? styles.activeTab : styles.disabledTab
          }>
          <Text style={styles.authText}>Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
