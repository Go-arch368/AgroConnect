import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import {
  User,
  HeartPulse,
  GraduationCap,
  Settings,
  PhoneCall,
  Mail,
  MessageCircle,
  LogOut,
  Search,
} from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const SectionHeader = ({ title }: { title: string }) => (
  <Text className="text-xl font-semibold mb-5 text-gray-800">{title}</Text>
);

const NotificationsSection = () => (
  <View className="mb-10">
    <SectionHeader title="Notifications" />
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[1, 2, 3].map((_, i) => (
        <View
          key={i}
          className="bg-white border border-gray-100 rounded-xl mr-4 h-24 w-44 items-center justify-center shadow-sm"
        >
          <Text className="text-gray-800 font-medium text-sm">
            Update {i + 1}
          </Text>
          <Text className="text-xs text-gray-500 mt-1">2h ago</Text>
        </View>
      ))}
    </ScrollView>
  </View>
);

const ContactUsSection = () => (
  <View className="mb-12">
    <SectionHeader title="Contact Us / Helpdesk" />
    <View className="flex-row justify-between">
      <TouchableOpacity className="flex-1 mx-1 rounded-xl items-center py-6 bg-white shadow-md border border-gray-100">
        <PhoneCall color="#7c3aed" size={26} />
        <Text className="mt-2 text-sm font-medium text-gray-700">Call</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 mx-1 rounded-xl items-center py-6 bg-white shadow-md border border-gray-100">
        <MessageCircle color="#22c55e" size={26} />
        <Text className="mt-2 text-sm font-medium text-gray-700">WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 mx-1 rounded-xl items-center py-6 bg-white shadow-md border border-gray-100">
        <Mail color="#e11d48" size={26} />
        <Text className="mt-2 text-sm font-medium text-gray-700">Email</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = await AsyncStorage.getItem("userData");
      setUserName(storedUser ? JSON.parse(storedUser).username ?? "" : "");
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userData");
    setModalVisible(false);
    router.push("/login");
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-6 py-10">
        {/* Profile Header */}
        <TouchableOpacity
          className="flex-row items-center mb-10"
          onPress={() => setModalVisible(true)}
        >
          <View className="w-12 h-12 bg-purple-100 rounded-full items-center justify-center shadow">
            <User color="#7c3aed" size={26} />
          </View>
          <View>
          
            <Text className="text-xl font-semibold ml-3 text-gray-800"> Profile</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <SectionHeader title="Quick Actions" />
        <View className="flex-row justify-between mb-10">
          <TouchableOpacity
            className="flex-1 mx-1 bg-white shadow-md border border-gray-100 rounded-xl items-center py-6"
            onPress={() => router.push("/health")}
          >
            <HeartPulse color="#7c3aed" size={26} />
            <Text className="mt-2 text-sm font-medium text-gray-700">
              Health
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 mx-1 bg-white shadow-md border border-gray-100 rounded-xl items-center py-6"
            onPress={() => router.push("/education")}
          >
            <GraduationCap color="#16a34a" size={26} />
            <Text className="mt-2 text-sm font-medium text-gray-700">
              Education
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 mx-1 bg-white shadow-md border border-gray-100 rounded-xl items-center py-6"
            onPress={() => router.push("/services")}
          >
            <Settings color="#f59e0b" size={26} />
            <Text className="mt-2 text-sm font-medium text-gray-700">
              Services
            </Text>
          </TouchableOpacity>
        </View>

        {/* Search Member */}
        <TouchableOpacity
          className="flex-row items-center justify-center bg-purple-600 rounded-xl py-4 mb-12 shadow-md"
          onPress={() => router.push("/searchUser")}
        >
          <Search color="#fff" size={18} />
          <Text className="ml-2 text-base font-semibold text-white">
            Search Member
          </Text>
        </TouchableOpacity>

        {/* Sections */}
        <NotificationsSection />
        <ContactUsSection />
      </View>

      {/* Profile Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 items-center justify-center p-5 bg-black/50">
          <View className="bg-white rounded-2xl p-6 w-80 items-center shadow-lg">
            <User color="#374151" size={40} />
            <Text className="mt-3 text-lg font-semibold text-gray-800">
              Logged in as
            </Text>
            <Text className="text-base mt-1 text-gray-600">{userName}</Text>

            <TouchableOpacity
              className="mt-6 flex-row items-center justify-center px-6 py-3 bg-red-500 rounded-xl w-full"
              onPress={handleLogout}
            >
              <LogOut color="#fff" size={18} />
              <Text className="ml-2 font-semibold text-white text-base">
                Logout
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="mt-3"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-sm text-blue-600 font-medium">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ProfileScreen;
