import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from './Background'; // Adjust import path as needed

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [clientErrors, setClientErrors] = useState({ email: '', password: '' });

  const validate = () => {
  let errors = { email: '', password: '' };

  if (!form.email.trim()) errors.email = 'Email is required';
  if (!form.password.trim()) errors.password = 'Password is required';

  setClientErrors(errors);

  // Check if any errors exist
  return !errors.email && !errors.password;
};


const handleSubmit = async () => {
  if (!validate()) return;
  const userData = { email: form.email, password: form.password };
  console.log('Storing user data:', userData);
  await AsyncStorage.setItem('userData', JSON.stringify(userData.email));
  console.log('Navigating to dashboard...');
  router.push('/dashboard');
};


  return (
    <Background>
      <View className="w-full items-center">
     
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 96, height: 96, marginBottom: 24, marginTop: 24 }}
          resizeMode="contain"
        />

        <Text className="text-2xl font-bold mb-8 text-purple-600 text-center">Welcome back.</Text>

      
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-3 mb-4 text-base w-full"
          placeholder="Email"
          placeholderTextColor="#888"
          value={form.email}
          onChangeText={text => setForm({ ...form, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {clientErrors.email ? (
          <Text className="text-red-500 mb-2 w-full">{clientErrors.email}</Text>
        ) : null}

        
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-3 mb-2 text-base w-full"
          placeholder="Password"
          placeholderTextColor="#888"
          value={form.password}
          secureTextEntry
          onChangeText={text => setForm({ ...form, password: text })}
          autoCapitalize="none"
        />
        {clientErrors.password ? (
          <Text className="text-red-500 mb-2 w-full">{clientErrors.password}</Text>
        ) : null}

        <TouchableOpacity
          className="mb-7 mt-2 self-end"
          onPress={() => { router.push("/forgotPassword") }}
        >
          <Text className="text-xs text-gray-500">Forgot your password?</Text>
        </TouchableOpacity>

     
        <TouchableOpacity
          className="bg-purple-600 rounded-md py-4 mb-6 w-full"
          activeOpacity={0.85}
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold text-lg text-center tracking-wider">LOGIN</Text>
        </TouchableOpacity>

      
        <View className="flex-row justify-center w-full">
          <Text className="text-gray-700">Don’t have an account? </Text>
          <Pressable onPress={() => router.push('/signup')}>
            <Text className="font-bold text-purple-600 underline ml-1">Sign up</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
};

export default Login;
