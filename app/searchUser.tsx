import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import SearchUsers from '@/components/SearchUsers'

const SearchUser = () => {
  return (
   <ScrollView className='flex-1'>
     <SearchUsers/>
    </ScrollView>
  )
}

export default SearchUser