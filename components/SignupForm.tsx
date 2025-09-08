import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Background from './Background'; // Or use ImageBackground as before

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', password: '' };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Enter a valid email';
      valid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSignup = () => {
    if (validate()) {
      // Handle your signup logic here (e.g., API call)
      // On success, route to dashboard or login
      router.push('/dashboard');
    }
  };

  return (
    <Background>
      <View className="w-full items-center">
       
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 106, height: 106, marginBottom: 24, marginTop: 24 }}
          resizeMode="contain"
        />


        <Text className="text-2xl font-bold mb-8 text-purple-600 text-center">Create Account</Text>

    
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-3 mb-2 text-base w-full"
          placeholder="Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
        {errors.name ? <Text className="text-red-500 mb-2 w-full">{errors.name}</Text> : null}

        
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-3 mb-2 text-base w-full"
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {errors.email ? <Text className="text-red-500 mb-2 w-full">{errors.email}</Text> : null}

    
        <TextInput
          className="bg-white border border-gray-400 rounded-md px-4 py-3 mb-4 text-base w-full"
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        {errors.password ? <Text className="text-red-500 mb-2 w-full">{errors.password}</Text> : null}

        <TouchableOpacity
          className="bg-purple-600 rounded-md py-4 mb-6 w-full"
          activeOpacity={0.85}
          onPress={handleSignup}
        >
          <Text className="text-white font-bold text-lg text-center tracking-wider">SIGN UP</Text>
        </TouchableOpacity>

       
        <View className="flex-row justify-center w-full mt-2">
          <Text className="text-gray-700">Already have an account? </Text>
          <Pressable onPress={() => router.push('/login')}>
            <Text className="font-bold text-purple-600 underline ml-1">Login</Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
