import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Camera, User, ChevronDown } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { supabaseAuthMock } from '../services/supabase';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateProfile'>;

export const CreateProfileScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('Aditya Chouhan');
  const [role, setRole] = useState('Student');
  const [goal, setGoal] = useState('Understand personal documents');
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    setLoading(true);
    await supabaseAuthMock.updateProfile({ fullName, role, goal });
    setLoading(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader onBack={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.heading}>Tell us a bit about you</Text>
        <Text style={styles.subheading}>
          This helps us give you better, more relevant explanations.
        </Text>

        {/* Profile Avatar Placeholder */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <User size={48} color={theme.colors.textMuted} />
          </View>
          <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.8}>
            <Camera size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your name"
            placeholderTextColor={theme.colors.textMuted}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>What best describes you?</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{role}</Text>
            <ChevronDown size={20} color={theme.colors.textMuted} />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Your goal with Legal → Legible</Text>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{goal}</Text>
            <ChevronDown size={20} color={theme.colors.textMuted} />
          </View>
        </View>

        {/* Bottom CTA */}
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Continue" onPress={handleContinue} loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginTop: theme.spacing.sm,
  },
  subheading: {
    fontSize: 14,
    color: theme.colors.textMuted,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.lg,
  },
  avatarContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: theme.spacing.xl,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EAE7DD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraBtn: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: theme.borderRadius.pill,
    borderWidth: 2,
    borderColor: theme.colors.background,
  },
  formGroup: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.textPrimary,
    marginBottom: 6,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    height: 48,
    paddingHorizontal: theme.spacing.md,
    fontSize: 15,
    color: theme.colors.textPrimary,
  },
  dropdown: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    height: 48,
    paddingHorizontal: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 15,
    color: theme.colors.textPrimary,
  },
  buttonContainer: {
    marginTop: theme.spacing.lg,
  },
});