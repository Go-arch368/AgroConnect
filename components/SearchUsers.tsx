import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react-native';

const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState('');
  const [memberId, setMemberId] = useState('');

  return (
    <View className="flex-1 px-5 py-8 bg-white">
     
      <View className="flex-row items-center justify-center mb-10">
        <SearchIcon size={34} />
        <Text className="font-bold text-3xl ml-4">Search Member</Text>
      </View>

     
      <View className="mb-12 items-center">
        <Text className="font-semibold text-lg mb-2">- Mobile/Member ID No</Text>
        <TextInput
          className="bg-gray-200 rounded-lg h-12 w-60 px-4 mb-8 text-base"
          placeholder="Enter mobile or member ID"
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <TouchableOpacity className="bg-gray-100 rounded-lg h-12 w-60 items-center justify-center mb-10">
          <Text className="font-semibold text-lg text-gray-700">Search Button</Text>
        </TouchableOpacity>
      </View>

      
      <View className="items-center">
        <Text className="font-bold text-base mb-2">Member ID</Text>
        <TextInput
          className="bg-gray-200 rounded-lg h-12 w-60 px-4 text-base mb-2"
          placeholder="Member ID"
          value={memberId}
          editable={false}
        />
       
        <View className="w-60 mt-2">
          <View className="bg-gray-100 h-4 rounded mb-2" />
          <View className="bg-gray-100 h-4 rounded mb-2" />
        </View>
      </View>
    </View>
  );
};

export default SearchUsers;
