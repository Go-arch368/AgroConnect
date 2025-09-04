import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import {
  User,
  HeartPulse,
  GraduationCap,
  Settings,
  PhoneCall,
  Mail,
  MessageCircle
} from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const NotificationsSection = () => (
  <View className="mb-8">
    <Text className="mb-2 text-base font-semibold text-gray-700">Notifications</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View className="bg-gray-200 rounded-lg mr-4 h-20 w-32" />
      <View className="bg-gray-200 rounded-lg mr-4 h-20 w-32" />
      <View className="bg-gray-200 rounded-lg mr-4 h-20 w-32" />
    </ScrollView>
  </View>
);

const ContactUsSection = () => (
  <View className="my-4">
    <Text className="mb-3 text-base font-semibold text-gray-700">Contact Us / Helpdesk</Text>
    <View className="flex-row justify-between bg-gray-100 rounded-lg p-2">
      <TouchableOpacity className="flex-1 mx-1 rounded-lg items-center py-4">
        <PhoneCall color="#555" size={24} />
        <Text className="mt-1 text-sm font-semibold">Call</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 mx-1 rounded-lg items-center py-4">
        <MessageCircle color="#27ae60" size={24} />
        <Text className="mt-1 text-sm font-semibold">WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 mx-1 rounded-lg items-center py-4">
        <Mail color="#555" size={24} />
        <Text className="mt-1 text-sm font-semibold">Email</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem('userData');
      setUserName(storedUser ? JSON.parse(storedUser).username ?? '' : '');
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    setModalVisible(false);
    router.push('/login');
  };

  return (
    <View className="flex-1 bg-white px-6 py-8">
      {/* Profile Header */}
      <TouchableOpacity
        className="flex-row items-center mb-8"
        onPress={() => setModalVisible(true)}
      >
        <View className="w-10 h-10 bg-gray-200 rounded-full items-center justify-center">
          <User color="#555" size={28} />
        </View>
        <Text className="ml-3 text-xl font-bold text-gray-800">Profile</Text>
      </TouchableOpacity>

      {/* Profile Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center p-5 bg-black/40">
          <View className="bg-white rounded-xl p-6 w-72 items-center">
            <User color="#555" size={40} />
            <Text className="mt-2 text-lg font-bold text-gray-800">Logged in as</Text>
            <Text className="text-base mt-1 text-gray-600">{userName}</Text>
            <TouchableOpacity
              className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
              onPress={handleLogout}
            >
              <Text className="font-bold text-md text-gray-800">Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mt-2"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-sm text-blue-500">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Health, Education, Services */}
      <View className="flex-row justify-between mb-6">
        <TouchableOpacity className="flex-1 mx-1 bg-gray-200 rounded-lg items-center py-5" onPress={()=>router.push("/health")}>
          <HeartPulse color="#555" size={24} />
          <Text className="mt-1 text-sm font-semibold">Health</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 mx-1 bg-gray-200 rounded-lg items-center py-5" onPress={()=>router.push("/education")}>
          <GraduationCap color="#555" size={24} />
          <Text className="mt-1 text-sm font-semibold">Education</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 mx-1 bg-gray-200 rounded-lg items-center py-5" onPress={()=>router.push("/services")}>
          <Settings color="#555" size={24} />
          <Text className="mt-1 text-sm font-semibold">Services</Text>
        </TouchableOpacity>
      </View>

      {/* Search Member Button */}
      <TouchableOpacity className="bg-gray-100 rounded-lg py-4 mb-6" onPress={()=>router.push("/searchUser")}>
        <Text className="text-md font-semibold text-center text-gray-700">Search Member</Text>
      </TouchableOpacity>

      {/* Notifications & Contact Us Sections */}
      <NotificationsSection />
      <ContactUsSection />
    </View>
  );
};

export default ProfileScreen;
