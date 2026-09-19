import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';
import { supabaseAuthMock } from '../services/supabase';

type Props = NativeStackScreenProps<RootStackParamList, 'LoginSignup'>;

export const LoginSignupScreen: React.FC<Props> = ({ navigation }) => {
  const handleAuth = async (method: 'google' | 'apple' | 'email') => {
    if (method === 'google') await supabaseAuthMock.signInWithGoogle();
    if (method === 'apple') await supabaseAuthMock.signInWithApple();
    if (method === 'email') await supabaseAuthMock.signInWithEmail('user@example.com');

    // Navigate to Create Profile
    navigation.navigate('CreateProfile');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Branding */}
        <View style={styles.header}>
          <Text style={styles.brandTitle}>Legal → Legible</Text>
          <Text style={styles.subtitle}>Complex legal stuff.{'\n'}Simple answers.</Text>
        </View>

        {/* Playful Document Illustration Placeholder */}
        <View style={styles.illustrationContainer}>
          <View style={styles.docCardBack}>
            <Text style={styles.docBackText}>CONTRACT</Text>
          </View>
          <View style={styles.docCardFront}>
            <Text style={styles.docFrontText}>In simple{'\n'}words.</Text>
          </View>
        </View>

        {/* Authentication Buttons */}
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

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
  },
  header: {
    alignItems: 'center',
    marginTop: theme.spacing.lg,
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
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.md,
  },
  docCardBack: {
    width: 140,
    height: 110,
    backgroundColor: '#EAE7DD',
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    position: 'absolute',
    transform: [{ rotate: '-8deg' }],
    borderWidth: 1,
    borderColor: '#D8D4C7',
  },
  docBackText: {
    fontSize: 11,
    color: '#8A8576',
    fontWeight: '700',
  },
  docCardFront: {
    width: 130,
    height: 100,
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '5deg' }],
  },
  docFrontText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: '700',
    textAlign: 'center',
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
    marginBottom: theme.spacing.xs,
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: theme.colors.textPrimary,
  },
});