import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Sparkles, CheckCircle2, Circle, Lightbulb } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { analyzeDocumentWithGroq } from '../services/groqApi';

type Props = NativeStackScreenProps<RootStackParamList, 'Analysis'>;

export const AnalysisScreen: React.FC<Props> = ({ navigation, route }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 800);
    const timer2 = setTimeout(() => setStage(2), 1600);
    const timer3 = setTimeout(() => setStage(3), 2400);

    const performAnalysis = async () => {
      await analyzeDocumentWithGroq('Document text content...');
      navigation.replace('Output', { documentId: 'doc_rental_101' });
    };

    performAnalysis();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.sparkleCircle}>
            <Sparkles size={36} color={theme.colors.primary} />
          </View>
          <Text style={styles.title}>Analysing Your Document...</Text>
          <Text style={styles.subtitle}>
            Our AI is reading, understanding and simplifying the legal jargon for you. This may take a few moments.
          </Text>
        </View>

        {/* Progress Stages */}
        <View style={styles.stagesContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${(stage + 1) * 25}%` }]} />
          </View>

          <StageItem label="Reading document" active={stage >= 0} />
          <StageItem label="Identifying key clauses" active={stage >= 1} />
          <StageItem label="Simplifying legal language" active={stage >= 2} />
          <StageItem label="Preparing your summary" active={stage >= 3} />
        </View>

        {/* Fun Fact Card */}
        <View style={styles.factCard}>
          <Lightbulb size={20} color="#D97706" style={{ marginRight: 10 }} />
          <View style={{ flex: 1 }}>
            <Text style={styles.factTitle}>Fun fact</Text>
            <Text style={styles.factText}>
              Legal documents can be up to 10x longer than necessary. We make them simple.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const StageItem = ({ label, active }: { label: string; active: boolean }) => (
  <View style={styles.stageRow}>
    {active ? (
      <CheckCircle2 size={18} color={theme.colors.primary} />
    ) : (
      <Circle size={18} color={theme.colors.border} />
    )}
    <Text style={[styles.stageText, active && styles.stageTextActive]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, paddingHorizontal: theme.spacing.lg, justifyContent: 'space-between', paddingVertical: theme.spacing.xl },
  header: { alignItems: 'center', marginTop: theme.spacing.md },
  sparkleCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: theme.colors.secondary + '50', justifyContent: 'center', alignItems: 'center', marginBottom: theme.spacing.md },
  title: { fontSize: 22, fontWeight: '700', color: theme.colors.textPrimary, textAlign: 'center' },
  subtitle: { fontSize: 13, color: theme.colors.textMuted, textAlign: 'center', marginTop: theme.spacing.xs, lineHeight: 18 },
  stagesContainer: { width: '100%' },
  progressBar: { height: 6, backgroundColor: theme.colors.border, borderRadius: 3, marginBottom: theme.spacing.lg, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: theme.colors.primary },
  stageRow: { flexDirection: 'row', alignItems: 'center', marginBottom: theme.spacing.sm },
  stageText: { fontSize: 14, color: theme.colors.textMuted, marginLeft: theme.spacing.sm },
  stageTextActive: { color: theme.colors.textPrimary, fontWeight: '600' },
  factCard: { backgroundColor: theme.colors.accentYellow, borderRadius: theme.borderRadius.md, padding: theme.spacing.md, flexDirection: 'row', alignItems: 'flex-start' },
  factTitle: { fontSize: 13, fontWeight: '700', color: '#92400E' },
  factText: { fontSize: 12, color: '#78350F', marginTop: 2 },
});