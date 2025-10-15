import React, { memo, useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View
} from "react-native";

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

 useEffect(() => {
  // X direction oscillates between -40 and 40
  Animated.loop(
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: 40, // move right
        duration: 8000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: -40, // move left
        duration: 16000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0, // move back to center
        duration: 8000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  // Y direction oscillates between -20 and 20
  Animated.loop(
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: 20, // move down
        duration: 6000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -20, // move up
        duration: 12000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0, // back to center
        duration: 6000,
        useNativeDriver: true,
      }),
    ])
  ).start();
}, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Animated background only */}
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            transform: [{ translateX }, { translateY }],
            zIndex: -1
          }
        ]}
        pointerEvents="none"
      >
        <ImageBackground
          source={require("../assets/images/img1.jpg")}
          style={styles.background}
          resizeMode="cover"
        />
      </Animated.View>

      {/* Non-animated form content */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {children}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default memo(Background);
