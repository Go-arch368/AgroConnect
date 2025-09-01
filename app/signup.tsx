import { SafeAreaView } from 'react-native';
import Signup from '@/components/SignupForm';
import React from 'react'

const signup = () => {
  return (
     <SafeAreaView className="flex-1 bg-white">
     <Signup/>
    </SafeAreaView>
  )
}

export default signup