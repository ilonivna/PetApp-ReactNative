import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function LoginPage() {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.welcomeText}>Hello, world!</Text>
      <View style={styles.titleCont}>
        <Text style={styles.title}>Welcome, a fellow pet lover!</Text>
        <Text style={styles.welcomeText}>
          Every human deserves a pet. We will help you find a fluffy friend.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.inputCont}>
          <TextInput
            placeholder={'Name'}
            style={styles.input}
            placeholderTextColor={'#838383'}
          />
        </View>
        <View style={styles.inputCont}>
          <TextInput
            placeholder={'Password'}
            style={styles.input}
            placeholderTextColor={'#838383'}
          />
        </View>
        <TouchableOpacity style={styles.letsgoBtn}>
          <Text style={styles.letsgoText}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
