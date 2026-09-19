import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import { SplashScreen } from '../screens/SplashScreen';
import { LoginSignupScreen } from '../screens/LoginSignupScreen';
import { CreateProfileScreen } from '../screens/CreateProfileScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { UploadDocumentScreen } from '../screens/UploadDocumentScreen';
import { AnalysisScreen } from '../screens/AnalysisScreen';
import { OutputScreen } from '../screens/OutputScreen';
import { DocumentHistoryScreen } from '../screens/DocumentHistoryScreen';
import { DocumentDetailsScreen } from '../screens/DocumentDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UploadDocument" component={UploadDocumentScreen} />
        <Stack.Screen name="Analysis" component={AnalysisScreen} />
        <Stack.Screen name="Output" component={OutputScreen} />
        <Stack.Screen name="DocumentHistory" component={DocumentHistoryScreen} />
        <Stack.Screen name="DocumentDetails" component={DocumentDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};