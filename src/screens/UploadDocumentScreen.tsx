import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FileUp, Camera, Cloud, FileText } from 'lucide-react-native';
import * as DocumentPicker from 'expo-document-picker';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../theme/theme';
import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { SecondaryButton } from '../components/SecondaryButton';

type Props = NativeStackScreenProps<RootStackParamList, 'UploadDocument'>;

export const UploadDocumentScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedFile, setSelectedFile] = useState<{ name: string; uri: string } | null>(null);

  const handlePickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/pdf', 'image/*'],
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      setSelectedFile({ name: asset.name, uri: asset.uri });
    }
  };

  const handleStartAnalysis = () => {
    navigation.navigate('Analysis', {
      fileName: selectedFile?.name || 'Rental_Agreement.pdf',
      fileUri: selectedFile?.uri,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppHeader onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.title}>Upload Your Document</Text>
        <Text style={styles.subtitle}>
          Select a file or take a photo. We'll analyze it and explain it in simple words.
        </Text>

        {/* Upload Container */}
        <View style={styles.uploadArea}>
          {selectedFile ? (
            <View style={styles.selectedBox}>
              <FileText size={36} color={theme.colors.primary} />
              <Text style={styles.fileName}>{selectedFile.name}</Text>
              <TouchableOpacity onPress={() => setSelectedFile(null)}>
                <Text style={styles.removeText}>Remove file</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyBox}>
              <View style={styles.iconCircle}>
                <FileUp size={40} color={theme.colors.primary} />
              </View>
            </View>
          )}

          <PrimaryButton
            title={selectedFile ? 'Analyze Document' : 'Choose File'}
            onPress={selectedFile ? handleStartAnalysis : handlePickDocument}
            style={{ marginTop: theme.spacing.lg }}
          />

          <View style={styles.secondaryRow}>
            <View style={{ flex: 1, marginRight: 6 }}>
              <SecondaryButton
                title="Take Photo"
                onPress={handlePickDocument}
                icon={<Camera size={16} color={theme.colors.textPrimary} />}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 6 }}>
              <SecondaryButton
                title="From Cloud"
                onPress={handlePickDocument}
                icon={<Cloud size={16} color={theme.colors.textPrimary} />}
              />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.formatText}>Supports PDF, DOC, DOCX, JPG, PNG</Text>
          <Text style={styles.sizeText}>(Max size 20 MB)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, paddingHorizontal: theme.spacing.lg, justifyContent: 'space-between', paddingBottom: theme.spacing.xl },
  title: { fontSize: 22, fontWeight: '700', color: theme.colors.textPrimary, textAlign: 'center', marginTop: theme.spacing.sm },
  subtitle: { fontSize: 14, color: theme.colors.textMuted, textAlign: 'center', marginTop: theme.spacing.xs },
  uploadArea: { alignItems: 'center', marginVertical: theme.spacing.xl },
  emptyBox: { height: 140, justifyContent: 'center', alignItems: 'center' },
  iconCircle: { width: 90, height: 90, borderRadius: 45, backgroundColor: theme.colors.secondary + '50', justifyContent: 'center', alignItems: 'center' },
  selectedBox: { alignItems: 'center', padding: theme.spacing.md },
  fileName: { fontSize: 15, fontWeight: '600', color: theme.colors.textPrimary, marginTop: 8 },
  removeText: { fontSize: 13, color: '#DC2626', marginTop: 4 },
  secondaryRow: { flexDirection: 'row', marginTop: theme.spacing.md, width: '100%' },
  footer: { alignItems: 'center' },
  formatText: { fontSize: 13, color: theme.colors.textMuted },
  sizeText: { fontSize: 12, color: theme.colors.textMuted, marginTop: 2 },
});