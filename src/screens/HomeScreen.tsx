import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Bell, Upload, Lightbulb, ChevronRight } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { DocumentCard } from '../components/DocumentCard';
import { LegalDocument } from '../types/document';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const MOCK_RECENT: LegalDocument[] = [
  { id: '1', title: 'Rental Agreement', uploadedAt: '2 days ago', keyPointsCount: 5, category: 'Agreements' },
  { id: '2', title: 'Freelance Contract', uploadedAt: '1 week ago', keyPointsCount: 8, category: 'Contracts' },
  { id: '3', title: 'Terms & Conditions', uploadedAt: '2 weeks ago', keyPointsCount: 6, category: 'Others' },
];

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Greeting */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Aditya 👋</Text>
            <Text style={styles.subgreeting}>
              Make legal documents simple, clear and understandable.
            </Text>
          </View>
          <TouchableOpacity style={styles.bellBtn}>
            <Bell size={20} color={theme.colors.textPrimary} />
          </TouchableOpacity>
        </View>

        {/* Upload Hero Card */}
        <TouchableOpacity
          style={styles.uploadCard}
          onPress={() => navigation.navigate('UploadDocument')}
          activeOpacity={0.85}
        >
          <View style={styles.uploadTextContainer}>
            <Text style={styles.uploadTitle}>Upload a Document</Text>
            <Text style={styles.uploadSubtitle}>
              Upload a legal document and we'll explain it in simple words.
            </Text>
          </View>
          <View style={styles.uploadIconCircle}>
            <Upload size={22} color={theme.colors.primary} />
          </View>
        </TouchableOpacity>

        {/* Recent Documents Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Documents</Text>
          <TouchableOpacity onPress={() => navigation.navigate('DocumentHistory')}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {MOCK_RECENT.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            onPress={() => navigation.navigate('DocumentDetails', { documentId: doc.id })}
          />
        ))}

        {/* Tip Card */}
        <View style={styles.tipCard}>
          <View style={styles.tipIcon}>
            <Lightbulb size={20} color="#D97706" />
          </View>
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Tip</Text>
            <Text style={styles.tipContent}>
              Not sure about a clause? Upload it and let us explain it.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { paddingHorizontal: theme.spacing.md, paddingBottom: theme.spacing.xl },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: theme.spacing.md,
  },
  greeting: { fontSize: 22, fontWeight: '700', color: theme.colors.textPrimary },
  subgreeting: { fontSize: 13, color: theme.colors.textMuted, marginTop: 2, maxWidth: '80%' },
  bellBtn: { padding: 8, borderRadius: theme.borderRadius.pill, backgroundColor: theme.colors.surface },
  uploadCard: {
    backgroundColor: theme.colors.secondary + '40',
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  uploadTextContainer: { flex: 1, paddingRight: theme.spacing.sm },
  uploadTitle: { fontSize: 18, fontWeight: '700', color: theme.colors.primary },
  uploadSubtitle: { fontSize: 13, color: theme.colors.textPrimary, marginTop: 4, lineHeight: 18 },
  uploadIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: { fontSize: 17, fontWeight: '600', color: theme.colors.textPrimary },
  seeAll: { fontSize: 14, color: theme.colors.primary, fontWeight: '600' },
  tipCard: {
    backgroundColor: theme.colors.accentYellow,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: theme.spacing.md,
  },
  tipIcon: { marginRight: theme.spacing.md, marginTop: 2 },
  tipTextContainer: { flex: 1 },
  tipTitle: { fontSize: 14, fontWeight: '700', color: '#92400E' },
  tipContent: { fontSize: 13, color: '#78350F', marginTop: 2 },
});