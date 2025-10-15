import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Animated,
  Keyboard,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from './Background'; // your animated background component

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [clientErrors, setClientErrors] = useState({ email: '', password: '' });
const [focusedField, setFocusedField] = useState<string | null>(null);


  // Animations
  const moveAnim = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0)).current;
  const formSlide = useRef(new Animated.Value(100)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(formSlide, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      Animated.timing(moveAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(moveAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const validate = () => {
    let errors = { email: '', password: '' };
    if (!form.email.trim()) errors.email = 'Email is required';
    if (!form.password.trim()) errors.password = 'Password is required';
    setClientErrors(errors);
    return !errors.email && !errors.password;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    const userData = { email: form.email, password: form.password };
    await AsyncStorage.setItem('userData', JSON.stringify(userData.email));
    router.push('/dashboard');
  };

  return (
    <Background>
      <Animated.View
        style={{
          transform: [{ translateY: moveAnim }],
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Animated.Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 96,
            height: 96,
            marginBottom: 24,
            marginTop: 24,
            borderRadius: 14,
            borderWidth: 2,
            borderColor: 'rgba(255,255,255,0.7)',
            backgroundColor: 'rgba(255,255,255,0.12)',
            transform: [{ scale: logoScale }],
            shadowColor: '#000',
            shadowOpacity: 0.35,
            shadowRadius: 10,
            shadowOffset: { width: 1, height: 2 },
          }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
            color: '#fff',
            textShadowColor: 'rgba(0,0,0,0.4)',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 10,
            letterSpacing: 1,
          }}
        >
          Sign in
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 15,
            textAlign: 'center'
          }}
        >
          Enter your email and password to access your account.
        </Text>

        <Animated.View
          style={{
            width: '90%',
            maxWidth: 400,
            borderRadius: 16,
            padding: 24,
            backgroundColor: 'rgba(30,41,82,0.37)', // <-- modern translucent color
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.24)',
            transform: [{ translateY: formSlide }],
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 18 },
            shadowOpacity: 0.28,
            shadowRadius: 24,
            elevation: 6,
            marginBottom: 18,
          }}
        >
          <TextInput
            style={{
              backgroundColor: 'rgba(255,255,255,0.61)',
              borderWidth: 1.1,
              borderColor: focusedField === 'email' ? '#9333ea' : '#ccc',
              color: '#222',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              marginBottom: 4,
              fontSize: 15,
              letterSpacing: 0.3,
            }}
            placeholder="Email"
            placeholderTextColor="#555"
            value={form.email}
            onChangeText={text => setForm({ ...form, email: text })}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {clientErrors.email ? (
            <Text style={{ color: '#b91c1c', marginBottom: 7, fontSize: 12, fontWeight: '600' }}>{clientErrors.email}</Text>
          ) : null}
          <TextInput
            style={{
              backgroundColor: 'rgba(255,255,255,0.61)',
              borderWidth: 1.1,
              borderColor: focusedField === 'password' ? '#9333ea' : '#ccc',
              color: '#222',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 15,
              marginBottom: 4,
              letterSpacing: 0.3,
            }}
            placeholder="Password"
            placeholderTextColor="#555"
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField(null)}
            autoCapitalize="none"
            secureTextEntry
          />
          {clientErrors.password ? (
            <Text style={{ color: '#b91c1c', marginBottom: 7, fontSize: 12, fontWeight: '600' }}>{clientErrors.password}</Text>
          ) : null}

          <TouchableOpacity style={{ marginTop: 4, alignSelf: 'flex-end' }}
            onPress={() => router.push('/forgotPassword')}>
            <Text style={{ fontSize: 13, color: '#6366f1', fontWeight: 'bold', letterSpacing: 0.2 }}>Forgot your password?</Text>
          </TouchableOpacity>

          <Animated.View style={{ transform: [{ scale: buttonScale }], marginTop: 14 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#9333ea',
                borderRadius: 9,
                paddingVertical: 15,
                marginBottom: 4,
                width: '100%',
                alignSelf: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.25,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 6,
                elevation: 3,
              }}
              activeOpacity={0.83}
              onPressIn={() =>
                Animated.spring(buttonScale, {
                  toValue: 0.96,
                  useNativeDriver: true,
                }).start()
              }
              onPressOut={() =>
                Animated.spring(buttonScale, {
                  toValue: 1,
                  friction: 3,
                  useNativeDriver: true,
                }).start(handleSubmit)
              }
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                  letterSpacing: 1,
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 4 }}>
            <Text style={{ color: '#7dd3fc', fontSize: 14, fontWeight: 'bold' }}>Don’t have an account? </Text>
            <Pressable onPress={() => router.push('/signup')}>
              <Text style={{ fontWeight: 'bold', color: '#fff', textDecorationLine: 'underline', fontSize: 14 }}>
                Sign up
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </Animated.View>
    </Background>
  );
};

export default Login;
