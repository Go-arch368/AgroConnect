import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const router = useRouter()
  const [form,setForm]= useState({
    username:"",
    password:""
  })
  const [clientErrors, setClientErrors] = useState<{ username: string; password: string }>({ username: "", password: "" })

    let errors:any={};

  function validate(){

    if(form.username===""){
      errors.username = "Username is required"
    }
    if(form.password===""){
      errors.password = "Password is required"
    }

  }
  

  const handleSubmit = async() => {
    
    validate()

    if(Object.keys(errors).length!==0){
         setClientErrors(errors)
    }
  else{
    console.log(form)
    const userData = {
      username:form.username,
    }

    await AsyncStorage.setItem("userData",JSON.stringify(userData))
    router.push("/dashboard")
    
  }
   
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-8">LOGIN</Text>

      <View className="w-full max-w-md">
        <Text className="font-bold mb-2">Username</Text>
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base text-black"
          placeholder="Enter your username"
          placeholderTextColor="#6b7280"
          value={form.username}
          onChangeText={(text) => setForm({ ...form, username: text })}
          autoCapitalize="none"
        />
        {clientErrors?.username && <Text className="text-red-500 mb-2">{clientErrors.username}</Text>}

        <Text className="font-bold mb-2">Password</Text>
        <TextInput
          className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base text-black"
          placeholder="Enter your password"
          placeholderTextColor="#6b7280"
          value={form.password}
          secureTextEntry={true}
          onChangeText={(text: string) => setForm({ ...form, password: text })}
          autoCapitalize="none"
        />

        {clientErrors?.password&&<Text className='text-red-500 mb-2'>{clientErrors?.password}</Text>}

        {/* Optional checkbox could go here */}

        <TouchableOpacity className="bg-gray-200 rounded-lg py-3 mt-4" activeOpacity={0.8} onPress={handleSubmit}>
          <Text className="font-bold text-lg text-gray-800 text-center">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-3">
          <Text className="text-gray-600 text-center">Forgot password</Text>
        </TouchableOpacity>

        <View className="mt-10 flex-row justify-center">
          <Text className="text-gray-700">Not a member? </Text>
            <Pressable onPress={() => router.push("/signup")}>
                      <Text className="font-bold text-black">Sign up</Text>
                    </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
