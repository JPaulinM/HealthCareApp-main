import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Import existing screens (Authentication flow)
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import LoginScreen from './src/screens/LoginScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import CreateAccount from './src/screens/CreateAccount';

// Import main app screens (After successful login)
import HomeScreen from './src/screens/HomeScreen';
import FindDoctorScreen from './src/screens/FindDoctorScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PrescriptionsScreen from './src/screens/PrescriptionsScreen';
import LabResultsScreen from './src/screens/LabResultsScreen';
import InsuranceScreen from './src/screens/InsuranceScreen';
import AppointmentsScreen from './src/screens/AppointmentsScreen';

// Import new additional screens (Health-related features)
import ChatScreen from './src/screens/ChatScreen';
import HealthTipsScreen from './src/screens/HealthTipsScreen';
import HealthHistoryScreen from './src/screens/HealthHistoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          {/* Authentication Flow */}
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ title: 'Reset Password' }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            options={{ title: 'Create Account' }}
          />

          {/* Main App Flow (after authentication) */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FindDoctorScreen"
            component={FindDoctorScreen}
            options={{ title: 'Find a Doctor' }}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ title: 'My Profile' }}
          />
          <Stack.Screen
            name="PrescriptionsScreen"
            component={PrescriptionsScreen}
            options={{ title: 'Prescriptions' }}
          />
          <Stack.Screen
            name="LabResultsScreen"
            component={LabResultsScreen}
            options={{ title: 'Lab Results' }}
          />
          <Stack.Screen
            name="InsuranceScreen"
            component={InsuranceScreen}
            options={{ title: 'Insurance Info' }}
          />

          {/* Health-related Features */}
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ title: 'Chat with Dr. GPT' }}
          />
          <Stack.Screen
            name="HealthTipsScreen"
            component={HealthTipsScreen}
            options={{ title: 'Health Tips' }}
          />
          <Stack.Screen
            name="HealthHistoryScreen"
            component={HealthHistoryScreen}
            options={{ title: 'Health History' }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{ title: 'Settings' }}
          />
          <Stack.Screen 
          name="AppointmentsScreen" 
          component={AppointmentsScreen} 
          options={{ title: 'Appointments' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;