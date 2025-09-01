import { Slot } from 'expo-router';
import { View } from 'react-native';

import LoginPage from '../login';

export default function TabsLayout() {
  return (
    <View className="flex-1 bg-white">
      <LoginPage/>
      {/* <View className="flex-1">
         <Slot /> 
      </View> */}
    </View>
  );
}