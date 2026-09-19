export type RootStackParamList = {
  LoginSignup: undefined;
  CreateProfile: undefined;
  Home: undefined;
  UploadDocument: undefined;
  Analysis: { documentId?: string; fileUri?: string; fileName?: string };
  Output: { documentId: string };
  DocumentHistory: undefined;
  DocumentDetails: { documentId: string };
};