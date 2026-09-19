import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FileText, ChevronRight } from 'lucide-react-native';
import { theme } from '../theme/theme';
import { LegalDocument } from '../types/document';

interface DocumentCardProps {
  document: LegalDocument;
  onPress: () => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconBox}>
        <FileText size={20} color={theme.colors.primary} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{document.title}</Text>
        <Text style={styles.meta}>
          {document.uploadedAt} · {document.keyPointsCount} key points
        </Text>
      </View>
      <ChevronRight size={18} color={theme.colors.textMuted} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: theme.colors.secondary + '60',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  meta: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginTop: 2,
  },
});