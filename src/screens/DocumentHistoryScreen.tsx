import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Search } from 'lucide-react-native';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { AppHeader } from '../components/AppHeader';
import { FilterTabs } from '../components/FilterTabs';
import { DocumentCard } from '../components/DocumentCard';
import { LegalDocument } from '../types/document';

type Props = NativeStackScreenProps<RootStackParamList, 'DocumentHistory'>;

const ALL_DOCUMENTS: LegalDocument[] = [
  { id: '1', title: 'Rental Agreement', uploadedAt: '2 days ago', keyPointsCount: 5, category: 'Agreements' },
  { id: '2', title: 'Freelance Contract', uploadedAt: '1 week ago', keyPointsCount: 8, category: 'Contracts' },
  { id: '3', title: 'Terms & Conditions', uploadedAt: '2 weeks ago', keyPointsCount: 6, category: 'Others' },
  { id: '4', title: 'Job Offer Letter', uploadedAt: '1 month ago', keyPointsCount: 4, category: 'Contracts' },
  { id: '5', title: 'NDA Agreement', uploadedAt: '1 month ago', keyPointsCount: 7, category: 'Agreements' },
];

export const DocumentHistoryScreen: React.FC<Props> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredDocs = ALL_DOCUMENTS.filter((doc) => {
    if (activeTab === 'All') return true;
    return doc.category === activeTab;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader
        onBack={() => navigation.goBack()}
        rightElement={
          <TouchableOpacity>
            <Search size={20} color={theme.colors.textPrimary} />
          </TouchableOpacity>
        }
      />
      <View style={styles.container}>
        <Text style={styles.title}>My Documents</Text>
        <Text style={styles.subtitle}>All your uploaded documents in one place.</Text>

        <View style={styles.tabsWrapper}>
          <FilterTabs
            tabs={['All', 'Contracts', 'Agreements', 'Others']}
            activeTab={activeTab}
            onSelectTab={setActiveTab}
          />
        </View>

        <ScrollView contentContainerStyle={styles.list}>
          {filteredDocs.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onPress={() => navigation.navigate('DocumentDetails', { documentId: doc.id })}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, paddingHorizontal: theme.spacing.md },
  title: { fontSize: 22, fontWeight: '700', color: theme.colors.textPrimary },
  subtitle: { fontSize: 13, color: theme.colors.textMuted, marginTop: 2, marginBottom: theme.spacing.md },
  tabsWrapper: { marginBottom: theme.spacing.xs },
  list: { paddingBottom: theme.spacing.xl },
});