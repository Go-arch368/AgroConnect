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
      router.push('/dashboard');
    }
  };

  return (
    <Background>
      <View style={{
        width: '100%',
        alignItems: 'center'
      }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 106, height: 106, marginBottom: 24, marginTop: 24 }}
          resizeMode="contain"
        />

        <Text style={{
          fontSize: 26,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#fff',
          textAlign: 'center',
          textShadowColor: 'rgba(0,0,0,0.34)',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 8
        }}>
          Create Account
        </Text>

        {/* Frosted-like Overlay */}
        <View style={{
          width: '90%',
          maxWidth: 400,
          borderRadius: 16,
          padding: 24,
          backgroundColor: 'rgba(30,41,82,0.37)',
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.24)',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.23,
          shadowRadius: 14,
          elevation: 5
        }}>
          {/* Name */}
          <TextInput
            style={{
              backgroundColor: 'rgba(255,255,255,0.61)',
              borderWidth: 1.2,
              borderColor: errors.name ? '#eb2f2f' : '#b8b8b8',
              color: '#212121',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 15,
              marginBottom: 3
            }}
            placeholder="Name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          {errors.name ? <Text style={{ color: '#b91c1c', marginBottom: 7, fontSize: 12, fontWeight: '600' }}>{errors.name}</Text> : null}

          {/* Email */}
          <TextInput
            style={{
              backgroundColor: 'rgba(255,255,255,0.61)',
              borderWidth: 1.2,
              borderColor: errors.email ? '#eb2f2f' : '#b8b8b8',
              color: '#212121',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 15,
              marginBottom: 3
            }}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          {errors.email ? <Text style={{ color: '#b91c1c', marginBottom: 7, fontSize: 12, fontWeight: '600' }}>{errors.email}</Text> : null}

          {/* Password */}
          <TextInput
            style={{
              backgroundColor: 'rgba(255,255,255,0.61)',
              borderWidth: 1.2,
              borderColor: errors.password ? '#eb2f2f' : '#b8b8b8',
              color: '#212121',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 15,
              marginBottom: 3
            }}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          {errors.password ? <Text style={{ color: '#b91c1c', marginBottom: 7, fontSize: 12, fontWeight: '600' }}>{errors.password}</Text> : null}

          <TouchableOpacity
            style={{
              backgroundColor: '#9333ea',
              borderRadius: 9,
              paddingVertical: 15,
              marginBottom: 14,
              width: '100%',
              shadowColor: '#000',
              shadowOpacity: 0.19,
              shadowOffset: { width: 0, height: 3 },
              shadowRadius: 6,
              elevation: 3
            }}
            activeOpacity={0.85}
            onPress={handleSignup}
          >
            <Text style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              letterSpacing: 1
            }}>SIGN UP</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
            <Text style={{ color: '#7dd3fc', fontSize: 14, fontWeight: 'bold' }}>Already have an account? </Text>
            <Pressable onPress={() => router.push('/login')}>
              <Text style={{
                fontWeight: 'bold',
                color: '#fff',
                textDecorationLine: 'underline',
                fontSize: 14,
                marginLeft: 2
              }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
