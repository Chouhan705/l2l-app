import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Bookmark, MoreVertical, FileText, CheckCircle2, Users, Home, CreditCard, ShieldCheck } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { AppHeader } from '../components/AppHeader';
import { ExpandableClauseCard } from '../components/ExpandableClauseCard';

type Props = NativeStackScreenProps<RootStackParamList, 'DocumentDetails'>;

export const DocumentDetailsScreen: React.FC<Props> = ({ navigation }) => {
  const [activeSegment, setActiveSegment] = useState<'Summary' | 'Full'>('Summary');

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader
        onBack={() => navigation.goBack()}
        rightElement={
          <View style={styles.actions}>
            <TouchableOpacity style={{ marginRight: 12 }}>
              <Bookmark size={20} color={theme.colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MoreVertical size={20} color={theme.colors.textPrimary} />
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.title}>Rental Agreement</Text>
            <Text style={styles.dateText}>Analysed on 12 Sep 2025</Text>
          </View>
          <TouchableOpacity style={styles.viewOriginalBtn}>
            <FileText size={14} color="#DC2626" />
            <Text style={styles.viewOriginalText}>View Original</Text>
          </TouchableOpacity>
        </View>

        {/* Segmented Control */}
        <View style={styles.segmentContainer}>
          <TouchableOpacity
            style={[styles.segmentBtn, activeSegment === 'Summary' && styles.segmentActive]}
            onPress={() => setActiveSegment('Summary')}
          >
            <Text style={[styles.segmentText, activeSegment === 'Summary' && styles.segmentTextActive]}>
              Summary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segmentBtn, activeSegment === 'Full' && styles.segmentActive]}
            onPress={() => setActiveSegment('Full')}
          >
            <Text style={[styles.segmentText, activeSegment === 'Full' && styles.segmentTextActive]}>
              Full Explanation
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Summary Card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <CheckCircle2 size={16} color={theme.colors.success} />
            <Text style={styles.summaryTitle}>Quick Summary</Text>
          </View>
          <Text style={styles.summaryBody}>
            This is a residential rental agreement between you (tenant) and the landlord for a period of 11 months. It includes details about rent, deposit, property rules and termination conditions.
          </Text>
        </View>

        {/* Key Points */}
        <Text style={styles.sectionHeader}>Key Points</Text>

        <ExpandableClauseCard
          number={1}
          title="Parties Involved"
          subtitle="Who the agreement is between"
          meaning="The agreement is between you (tenant) and the landlord."
          simpleTerms="Identifies tenant and landlord responsibilities."
          icon={<Users size={18} color={theme.colors.primary} />}
        />
        <ExpandableClauseCard
          number={2}
          title="Property Details"
          subtitle="Information about the property"
          meaning="Specifies exact flat address and property condition."
          simpleTerms="Confirms the premises details."
          icon={<Home size={18} color={theme.colors.primary} />}
        />
        <ExpandableClauseCard
          number={3}
          title="Rent and Payment Terms"
          subtitle="How much to pay and when"
          meaning="Monthly rent due on 5th of each month."
          simpleTerms="Pay agreed rent on time every month."
          icon={<CreditCard size={18} color={theme.colors.primary} />}
        />
        <ExpandableClauseCard
          number={4}
          title="Security Deposit"
          subtitle="Deposit amount and conditions"
          meaning="2 months refundable security deposit held by landlord."
          simpleTerms="Refunded at move-out."
          icon={<ShieldCheck size={18} color={theme.colors.primary} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { paddingHorizontal: theme.spacing.md, paddingBottom: theme.spacing.xl },
  actions: { flexDirection: 'row', alignItems: 'center' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: theme.spacing.md },
  title: { fontSize: 20, fontWeight: '700', color: theme.colors.textPrimary },
  dateText: { fontSize: 12, color: theme.colors.textMuted, marginTop: 2 },
  viewOriginalBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEE2E2', paddingHorizontal: 10, paddingVertical: 6, borderRadius: theme.borderRadius.sm },
  viewOriginalText: { fontSize: 12, fontWeight: '600', color: '#DC2626', marginLeft: 4 },
  segmentContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: theme.colors.border, marginBottom: theme.spacing.md },
  segmentBtn: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  segmentActive: { borderBottomWidth: 2, borderBottomColor: theme.colors.primary },
  segmentText: { fontSize: 14, color: theme.colors.textMuted, fontWeight: '500' },
  segmentTextActive: { color: theme.colors.primary, fontWeight: '700' },
  summaryCard: { backgroundColor: theme.colors.secondary + '30', borderRadius: theme.borderRadius.md, padding: theme.spacing.md, marginBottom: theme.spacing.lg },
  summaryHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  summaryTitle: { fontSize: 14, fontWeight: '700', color: theme.colors.primary, marginLeft: 6 },
  summaryBody: { fontSize: 13, color: theme.colors.textPrimary, lineHeight: 19 },
  sectionHeader: { fontSize: 16, fontWeight: '700', color: theme.colors.textPrimary, marginBottom: theme.spacing.sm },
});