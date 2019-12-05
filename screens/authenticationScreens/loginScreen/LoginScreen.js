import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {styles} from './loginStyles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to the login page</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email address"
        name="email"
        autoCapitalize="none"
        placeholderTextColor="white"
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholder="Password"
        name="password"
        autoCapitalize="none"
        placeholderTextColor="white"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
