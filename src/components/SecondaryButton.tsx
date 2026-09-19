import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  style?: object;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  title,
  onPress,
  icon,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
      {icon}
      <Text style={[styles.text, icon ? { marginLeft: 8 } : null]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    height: 50,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
});