import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { theme } from '../theme/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ClauseProps {
  number: number;
  title: string;
  subtitle: string;
  meaning: string;
  simpleTerms: string;
  icon: React.ReactNode;
}

export const ExpandableClauseCard: React.FC<ClauseProps> = ({
  number,
  title,
  subtitle,
  meaning,
  simpleTerms,
  icon
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.header} onPress={toggleExpand} activeOpacity={0.7}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{`${number}. ${title}`}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {expanded ? (
          <ChevronUp color={theme.colors.textMuted} size={20} />
        ) : (
          <ChevronDown color={theme.colors.textMuted} size={20} />
        )}
      </TouchableOpacity>

      {expanded && (
        <View style={styles.body}>
          <Text style={styles.sectionHeader}>This clause means:</Text>
          <Text style={styles.meaningText}>{meaning}</Text>

          <Text style={[styles.sectionHeader, { marginTop: 12 }]}>In simple terms:</Text>
          <View style={styles.highlightBox}>
            <Text style={styles.simpleText}>{simpleTerms}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.textMuted,
    marginTop: 2,
  },
  body: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: theme.spacing.md,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.textMuted,
  },
  meaningText: {
    fontSize: 15,
    color: theme.colors.textPrimary,
    marginTop: 4,
    lineHeight: 22,
  },
  highlightBox: {
    backgroundColor: theme.colors.secondary + '40', // soft translucent sage
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
    marginTop: 6,
  },
  simpleText: {
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.primary,
    lineHeight: 22,
  },
});