import { Slot } from 'expo-router';
import React from 'react';  
import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { I18nManager } from 'react-native';
import './globals.css';

export default function RootLayout() {
  React.useEffect(() => {
    I18nManager.forceRTL(false); // Force LTR to prevent rightward shifts
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar hidden={true} />
        <View className="flex-1">
          <Slot />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}