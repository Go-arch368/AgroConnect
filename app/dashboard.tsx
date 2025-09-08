import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import ProfileScreen from '@/components/ProfileData'
const Dashboard = () => {
  return (
    <ScrollView className='flex-1'>
      <ProfileScreen/>
    </ScrollView>
  )
}

export default Dashboard