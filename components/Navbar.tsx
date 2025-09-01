import { useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Navbar() {
  const router = useRouter();

  return (
    <View className="h-16 bg-green-600 flex-row items-center justify-between px-6 shadow-md">
      <Text className="text-white text-2xl font-bold">AgroConnect</Text>
      <Pressable
        onPress={() => router.push('/login')}
        className="px-3 py-2 rounded-md bg-green-700/80 active:bg-green-800"
      >
        <Text className="text-white text-base font-medium">Login</Text>
      </Pressable>
    </View>
  );
}