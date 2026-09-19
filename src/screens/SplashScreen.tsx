import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // 1. Logo Icon Fade-in
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      // 2. Name / Text Fade-in
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // 3. Tagline Fade-in
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('LoginSignup');
      }, 700);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Step 1: Artistic Book Logo */}
      <Animated.Image
        source={require('../assets/logo.png')}
        style={[styles.logoImage, { opacity: logoOpacity }]}
        resizeMode="contain"
      />

      {/* Step 2: L2L Legal to Legible Text */}
      <Animated.Image
        source={require('../assets/logo-text.png')}
        style={[styles.textImage, { opacity: textOpacity }]}
        resizeMode="contain"
      />

      {/* Step 3: UNDERSTAND WHAT MATTERS Tagline */}
      <Animated.Image
        source={require('../assets/tagline.png')}
        style={[styles.taglineImage, { opacity: taglineOpacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  logoImage: {
    width: 180,
    height: 120,
    marginBottom: theme.spacing.md,
  },
  textImage: {
    width: 220,
    height: 60,
    marginBottom: theme.spacing.sm,
  },
  taglineImage: {
    width: 260,
    height: 24,
  },
});