import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Search } from "lucide-react-native";

const SearchUsers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [memberId, setMemberId] = useState("");

  return (
    <ScrollView className="flex-1 bg-gray-50 px-4 py-6">
      {/* Header */}
      <Text className="text-2xl font-bold mb-6 text-purple-600 text-center">
        Search Member
      </Text>

      {/* Search Card */}
      <View className="bg-white rounded-2xl shadow-md p-5 mb-6">
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
        <TouchableOpacity className="flex-row items-center justify-center bg-purple-600 rounded-xl py-4 shadow-md">
          <Search color="#fff" size={18} />
          <Text className="ml-2 text-base font-semibold text-white">
            Search Member
          </Text>
        </TouchableOpacity>
      </View>

      {/* Result Card */}
      <View className="bg-white rounded-2xl shadow-md p-5 mb-6">
        <Text className="font-bold text-base text-gray-700 mb-3">
          Member ID
        </Text>
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
    </ScrollView>
  );
};

export default SearchUsers;
