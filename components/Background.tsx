import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const Background = ({ children }: Props) => (
  <ImageBackground
    source={require('../assets/images/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}  
  >
    <KeyboardAvoidingView
      style={styles.container} 
      behavior={Platform.OS === 'ios' || Platform.OS === 'android' ? 'padding' : undefined}
    >
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',   
  },
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,   
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});


export default memo(Background);
