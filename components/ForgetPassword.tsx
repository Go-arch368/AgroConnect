import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Background from './Background';
import { useRouter } from 'expo-router';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <Background>
      <View className="flex-1 w-full items-center justify-center">
    
        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 96, height: 96, marginTop: 24, marginBottom: 24 }}
          resizeMode="contain"
        />

     
        <Text className="text-2xl font-bold mb-8 text-purple-600 text-center">
          Forget Password
        </Text>

    
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-3 mb-4 text-base w-full"
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

      
        <TouchableOpacity
          className="bg-purple-600 rounded-md py-4 mb-6 w-full"
          activeOpacity={0.85}
        >
          <Text className="text-white font-bold text-lg text-center tracking-wider">
            SEND RESET INSTRUCTIONS
          </Text>
        </TouchableOpacity>

        {/* Back to Login Link */}
        <TouchableOpacity
          className="mb-7 mt-2 self-start"
          onPress={() => { router.push("/login"); }}
        >
          <Text className="text-xs text-gray-500">Back to Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default ForgetPassword;
