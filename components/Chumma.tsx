import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { GraduationCap, HeartPulse, User,Settings,PhoneCall, Mail, MessageCircle, } from 'lucide-react-native'

const Chumma = () => {
    const [moddleVisible,setModalVisible] = useState(false)
  return (
    <View className='flex-1 bg-white px-6 py-8'>
        <TouchableOpacity
           className='flex-row items-center'
           onPress = {()=>setModalVisible(true)}
        >
           <User color="#555" size={28} className='border rounded-xl'/>
           <Text className='text-base ml-3 font-bold text-gray-800 py-1'>Profile</Text>
        </TouchableOpacity>

        <Modal
          visible={moddleVisible}
          transparent={true}
          animationType='fade'
          onRequestClose={()=>setModalVisible(false)}
        >
           <View>
            
           </View>
        </Modal>

        <View className='flex-row justify-between mt-10'>
             <TouchableOpacity className='flex-1 mx-1 bg-gray-200 rounded-lg items-center py-3'>
                  <HeartPulse size={24} color="#555"/>
                  <Text className='mt-1 text-sm font-semibold'>Health</Text>
            </TouchableOpacity>
             <TouchableOpacity className='flex-1 mx-1 bg-gray-200 rounded-lg items-center py-3'>
                  <GraduationCap size={24} color="#555"/>
                  <Text className='mt-1 text-sm font-semibold'>Education</Text>
            </TouchableOpacity>
             <TouchableOpacity className='flex-1 mx-1 bg-gray-200 rounded-lg items-center py-3'>
                  <Settings size={24} color="#555"/>
                  <Text className='mt-1 text-sm font-semibold'>Services</Text>
            </TouchableOpacity>
        </View>

       <TouchableOpacity className='bg-gray-100 rounded-lg py-4 mt-6'>
           <Text className='text-md font-semibold text-center text-gray-700'>Search Member</Text>
       </TouchableOpacity>

       <Text className='mt-2 py-5 text-base font-semibold text-gray-700'>Notifications</Text>

       <View className='flex-row mt-4'>
            <View className='flex-1 bg-gray-200 rounded-lg mr-2 h-20'/>
            <View className='flex-1 bg-gray-200 rounded-lg mr-2 h-20'/>
            <View className='flex-1 bg-gray-200 rounded-lg mr-2 h-20'/>
       </View>

       <Text className='mb-3 text-base font-semibold text-gray-700 mt-5'>Contact Us / Helpdesk</Text>

        <View className="flex-row justify-between bg-gray-100 rounded-lg p-2">
        <TouchableOpacity className="flex-1 mx-1  rounded-lg items-center py-4">
          <PhoneCall color="#555" size={24} />
          <Text className="mt-1 text-sm font-semibold">Call</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 mx-1  rounded-lg items-center py-4">
          <MessageCircle color="#27ae60" size={24} />
          <Text className="mt-1 text-sm font-semibold">WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 mx-1  rounded-lg items-center py-4">
          <Mail color="#555" size={24} />
          <Text className="mt-1 text-sm font-semibold">Email</Text>
        </TouchableOpacity>
      </View>
   
    </View>
  )
}

export default Chumma