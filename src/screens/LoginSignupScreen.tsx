import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { supabaseAuthMock } from '../services/supabase';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginSignup'>;

export const LoginSignupScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleAuth = async (method: 'google' | 'apple' | 'email') => {
    if (method === 'google') await supabaseAuthMock.signInWithGoogle();
    if (method === 'apple') await supabaseAuthMock.signInWithApple();
    if (method === 'email') await supabaseAuthMock.signInWithEmail('user@example.com');

    navigation.navigate('CreateProfile');
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 12 }]}>
      {/* Header Branding */}
      <View style={styles.header}>
        <Text style={styles.brandTitle}>Legal → Legible</Text>
        <Text style={styles.subtitle}>Complex legal stuff.{'\n'}Simple answers.</Text>
      </View>

      {/* Screen 1 Document Illustration Asset */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../assets/illustration1.png')}
          style={styles.illustrationImage}
          resizeMode="contain"
        />
      </View>

      {/* Auth Action Buttons */}
      <View style={styles.authContainer}>
        <PrimaryButton
          title="Continue with Google"
          onPress={() => handleAuth('google')}
          style={styles.googleBtn}
        />
        <SecondaryButton
          title="Continue with Apple"
          onPress={() => handleAuth('apple')}
          style={styles.authBtnMargin}
        />
        <SecondaryButton
          title="Continue with Email"
          onPress={() => handleAuth('email')}
          style={styles.authBtnMargin}
        />
      </View>

      {/* Legal Footer Links */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textMuted,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
  illustrationContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationImage: {
    width: '100%',
    height: '100%',
  },
  authContainer: {
    width: '100%',
  },
  googleBtn: {
    backgroundColor: theme.colors.primary,
  },
  authBtnMargin: {
    marginTop: theme.spacing.sm,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
    color: theme.colors.textPrimary,
  },
});