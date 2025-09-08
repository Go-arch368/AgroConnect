import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import ServiceScreen from '@/components/ServiceScreen'


const Services = () => {
  return (
    <ScrollView className='flex-1'>
      <ServiceScreen/>
    </ScrollView>
  )
}

export default Services