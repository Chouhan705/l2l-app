import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Share2, Bookmark, Users, Home, CreditCard, ShieldCheck, Calendar, AlertTriangle, FileText } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { AppHeader } from '../components/AppHeader';
import { ExpandableClauseCard } from '../components/ExpandableClauseCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Output'>;

export const OutputScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader
        onBack={() => navigation.navigate('Home')}
        rightElement={
          <View style={styles.actions}>
            <TouchableOpacity style={{ marginRight: 12 }}>
              <Share2 size={20} color={theme.colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Bookmark size={20} color={theme.colors.textPrimary} />
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.docTitle}>Rental Agreement</Text>
        <Text style={styles.docSubtitle}>Here are the key points from your document.</Text>
        <Text style={styles.instruction}>Tap on any section to see a simple explanation.</Text>

        <View style={styles.clausesList}>
          <ExpandableClauseCard
            number={1}
            title="Parties Involved"
            subtitle="Who the agreement is between"
            meaning="The agreement is between you (the tenant) and the landlord (Mr. Sharma). You are renting the property, and the landlord owns it."
            simpleTerms="It clearly states who is responsible for what in this agreement."
            icon={<Users size={18} color={theme.colors.primary} />}
          />
          <ExpandableClauseCard
            number={2}
            title="Property Details"
            subtitle="Information about the property"
            meaning="Defines the flat address, premises boundaries, and included fittings/furnishings."
            simpleTerms="Confirms the exact property and fixtures you are renting."
            icon={<Home size={18} color={theme.colors.primary} />}
          />
          <ExpandableClauseCard
            number={3}
            title="Rent and Payment Terms"
            subtitle="How much to pay and when"
            meaning="Rent of ₹25,000 per month is due on or before the 5th day of every calendar month."
            simpleTerms="You must pay rent by the 5th of each month."
            icon={<CreditCard size={18} color={theme.colors.primary} />}
          />
          <ExpandableClauseCard
            number={4}
            title="Security Deposit"
            subtitle="Deposit amount and conditions"
            meaning="A deposit of ₹1,000,000 is refundable upon tenancy completion minus damages."
            simpleTerms="Your security deposit will be refunded when you move out safely."
            icon={<ShieldCheck size={18} color={theme.colors.primary} />}
          />
          <ExpandableClauseCard
            number={5}
            title="Duration of Agreement"
            subtitle="Start and end date"
            meaning="The contract term is valid for 11 months commencing Oct 1, 2026."
            simpleTerms="Lease covers an 11-month period."
            icon={<Calendar size={18} color={theme.colors.primary} />}
          />
          <ExpandableClauseCard
            number={6}
            title="Termination Conditions"
            subtitle="When either party can end the agreement"
            meaning="Either party may terminate agreement giving 1 month prior written notice."
            simpleTerms="30 days notice required to cancel the lease early."
            icon={<AlertTriangle size={18} color={theme.colors.primary} />}
          />
          <ExpandableClauseCard
            number={7}
            title="Additional Clauses"
            subtitle="Other important details"
            meaning="Covers society maintenance fees, painting charges, and pet policies."
            simpleTerms="Covers extra rules like pets and maintenance fees."
            icon={<FileText size={18} color={theme.colors.primary} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { paddingHorizontal: theme.spacing.md, paddingBottom: theme.spacing.xl },
  actions: { flexDirection: 'row', alignItems: 'center' },
  docTitle: { fontSize: 22, fontWeight: '700', color: theme.colors.textPrimary },
  docSubtitle: { fontSize: 13, color: theme.colors.textMuted, marginTop: 2 },
  instruction: { fontSize: 13, color: theme.colors.textMuted, marginTop: 2, marginBottom: theme.spacing.md },
  clausesList: { marginTop: theme.spacing.xs },
});