/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './styles';
import {HidePassIcon, ViewPassIcon} from '../../../assets/icons';

interface IInputValues {
  email: string;
  password: string;
  errorEmail: null | string;
  errorPassword: null | string;
}

export default function LoginPage() {
  const [inputValues, setInputValues] = useState<IInputValues>({
    email: '',
    password: '',
    errorEmail: null,
    errorPassword: null,
  });

  const [isPassHidden, setIsPassHidden] = useState(true);

  const handleChangeInput = (
    key: 'email' | 'password' | 'errorEmail' | 'errorPassword',
    value: string | null,
  ) => {
    setInputValues(prevState => ({...prevState, [key]: value}));
  };

  const checkEmail = () => {
    const emailValidator = new RegExp(
      '^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    if (!emailValidator.test(inputValues.email)) {
      handleChangeInput('errorEmail', 'Not valid email');
    } else {
      handleChangeInput('errorEmail', null);
    }
  };

  const checkPwd = () => {
    if (inputValues.password.length < 8) {
      handleChangeInput(
        'errorPassword',
        'Password must be at least 8 characters',
      );
    } else {
      handleChangeInput('errorPassword', null);
    }
  };

  const isDisabledLetsGoBtn = Boolean(
    inputValues.errorEmail ||
      inputValues.errorPassword ||
      !inputValues.email ||
      !inputValues.password,
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainWrapper}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({android: 20, ios: 90})}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.titleCont}>
            <Text style={styles.title}>Welcome, {'\n'}a fellow pet lover!</Text>
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
                placeholder={'Email'}
                style={styles.input}
                placeholderTextColor={'#838383'}
                value={inputValues.email}
                onBlur={() => {
                  checkEmail();
                }}
                onChangeText={text => handleChangeInput('email', text)}
              />
            </View>
            {inputValues.errorEmail && (
              <Text style={{color: 'red'}}>{inputValues.errorEmail}</Text>
            )}
            <View style={styles.inputCont}>
              <TextInput
                placeholder={'Password'}
                style={styles.input}
                placeholderTextColor={'#838383'}
                value={inputValues.password}
                onChangeText={text => handleChangeInput('password', text)}
                onBlur={() => {
                  checkPwd();
                }}
                secureTextEntry={isPassHidden}
              />
              <TouchableOpacity
                hitSlop={{top: 15, bottom: 15, right: 15, left: 15}}
                onPress={() => {
                  setIsPassHidden(!isPassHidden);
                }}
              />
              {isPassHidden ? <ViewPassIcon /> : <HidePassIcon />}
            </View>
            {inputValues.errorPassword && (
              <Text style={{color: 'red'}}>{inputValues.errorPassword}</Text>
            )}
            <TouchableOpacity
              style={[styles.letsgoBtn, isDisabledLetsGoBtn && {opacity: 0.5}]}
              disabled={isDisabledLetsGoBtn}>
              <Text style={styles.letsgoText}>Let's go!</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
