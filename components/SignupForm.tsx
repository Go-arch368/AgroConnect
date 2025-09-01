import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-8">SIGN UP</Text>

      <View className="w-full max-w-md">

         <Text className="font-bold mb-2">Username</Text>
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base text-black"
          placeholder="Choose a username"
          placeholderTextColor="#6b7280"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text className="font-bold mb-2">Email</Text>
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base text-black"
          placeholder="Enter your email"
          placeholderTextColor="#6b7280"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

      

        <Text className="font-bold mb-2">Password</Text>
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-2 text-base text-black"
          placeholder="Enter your password"
          placeholderTextColor="#6b7280"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <TouchableOpacity className="bg-gray-200 rounded-lg py-3 mt-4" activeOpacity={0.8}>
          <Text className="font-bold text-lg text-gray-800 text-center">Sign Up</Text>
        </TouchableOpacity>

        <View className="mt-10 flex-row justify-center">
          <Text className="text-gray-700">Already have an account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text className="font-bold text-black">Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;
