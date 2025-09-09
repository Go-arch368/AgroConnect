import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Search } from "lucide-react-native";

const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [memberId, setMemberId] = useState("");

  return (
    <View className="flex-1 bg-gray-50 px-5 py-8">
      {/* Header */}
      <View className="flex-row items-center justify-center mb-8">
        <Search size={34} color="#7c3aed" />
        <Text className="ml-3 text-2xl font-bold text-purple-600">Search Member</Text>
      </View>

      {/* Search Card */}
      <View className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <Text className="font-semibold text-base text-gray-700 mb-3">
          Enter Mobile Number / Member ID
        </Text>
        <TextInput
          className="bg-gray-100 rounded-xl h-12 px-4 text-base mb-4 border border-gray-200"
          placeholder="e.g. 9876543210 or MEM1234"
          placeholderTextColor="#9ca3af"
          value={searchValue}
          onChangeText={setSearchValue}
        />
        <TouchableOpacity className="flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl py-4 mb-8 shadow-md">
          <Search color="#fff" size={20} />
          <Text className="ml-2 text-md font-semibold text-center text-white">Search</Text>
        </TouchableOpacity>
      </View>

      {/* Result Card */}
      <View className="bg-white rounded-2xl shadow-md p-6 items-center">
        <Text className="font-bold text-base text-gray-700 mb-3">Member ID</Text>
        <TextInput
          className="bg-gray-100 rounded-xl h-12 w-full px-4 text-base border border-gray-200 mb-3"
          placeholder="Member ID"
          placeholderTextColor="#9ca3af"
          value={memberId}
          editable={false}
        />

        {/* Placeholder result fields */}
        <View className="w-full mt-2">
          <View className="bg-gray-100 h-4 rounded mb-2" />
          <View className="bg-gray-100 h-4 rounded mb-2" />
          <View className="bg-gray-100 h-4 rounded" />
        </View>
      </View>
    </View>
  );
};

export default SearchUsers;
