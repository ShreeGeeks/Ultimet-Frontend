import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

export default function LoginScreen({ navigation }) {
  const [Number, setNumber] = useState({ value: '', error: '' });
  const [otp, setOTP] = useState({ value: '', error: '' });

  const onLoginPressed = async () => {
    // const url = 'http://127.0.0:9000/api/user-service/auth/login'; // for Android emulator
    // const url = 'http://localhost:9000/api/user-service/auth/login'; // for iOS simulator
    // const url = 'http://110.224.189.121:9000/api/user-service/auth/login'; // for physical devices

    // const data = {
    //   username: Number.value, // Use the phone number from the input
    //   password: otp.value, // Use the OTP as the password
    // };

    // try {
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const responseData = await response.json();
    //   console.log('Success:', responseData);

      // Navigate to the Dashboard only if login is successful
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });
    // } catch (error) {
    //   console.error('Error:', error);
    //   // Optionally handle the error (e.g., show a notification to the user)
    // }
  };
 

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header style={styles.mainHeader}>Welcome</Header>
      <Text style={styles.header}>Login to your account</Text>
      <TextInput
        label="Phone Number"
        returnKeyType="next"
        value={Number.value}
        onChangeText={(text) => setNumber({ value: text, error: '' })}
        autoCapitalize="none"
        maxLength={10}
        keyboardType="phone-pad"
      />
      <TextInput
        label="Enter OTP"
        returnKeyType="done"
        value={otp.value}
        maxLength={4}
        onChangeText={(text) => setOTP({ value: text, error: '' })}
        keyboardType="phone-pad"
        secureTextEntry
      />
      <View style={styles.otp}>
        <TouchableOpacity>
          <Text style={styles.otptext}>Resend OTP?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  mainHeader: {
    width: '100%',
    fontSize: 28,
    marginTop: '50%',
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
  },
  otp: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  otptext: {
    fontSize: 16,
    color: theme.colors.primary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
