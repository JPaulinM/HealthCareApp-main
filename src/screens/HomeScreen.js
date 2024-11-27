import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, IconButton, Card, Divider } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Section */}
      <View style={styles.header}>
        <Text variant="headlineLarge" style={styles.welcomeText}>
          Welcome to Dr.GPT!
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Your Virtual Health Companion
        </Text>
      </View>

      {/* Quick Actions Section */}
      <View style={styles.quickActions}>
        <Card style={styles.actionCard} onPress={() => navigation.navigate('ChatScreen')}>
          <IconButton icon="chat" size={30} style={styles.actionIcon} />
          <Text variant="labelMedium" style={styles.cardText}>
            Chat with Dr.GPT
          </Text>
        </Card>

        <Card style={styles.actionCard} onPress={() => navigation.navigate('HealthTipsScreen')}>
          <IconButton icon="heart" size={30} style={styles.actionIcon} />
          <Text variant="labelMedium" style={styles.cardText}>
            Health Tips
          </Text>
        </Card>
      </View>

      <View style={styles.quickActions}>
        <Card style={styles.actionCard} onPress={() => navigation.navigate('HealthHistoryScreen')}>
          <IconButton icon="history" size={30} style={styles.actionIcon} />
          <Text variant="labelMedium" style={styles.cardText}>
            Health History
          </Text>
        </Card>

        <Card style={styles.actionCard} onPress={() => navigation.navigate('SettingsScreen')}>
          <IconButton icon="cog" size={30} style={styles.actionIcon} />
          <Text variant="labelMedium" style={styles.cardText}>
            Settings
          </Text>
        </Card>
      </View>

      <Divider style={styles.divider} />

      {/* Feature Cards Section */}
      <View>
        <Card style={styles.featureCard} onPress={() => navigation.navigate('FindDoctorScreen')}>
          <IconButton icon="account-search" size={40} style={styles.featureIcon} />
          <Text style={styles.featureText}>Find a Doctor</Text>
        </Card>

        <Card style={styles.featureCard} onPress={() => navigation.navigate('ProfileScreen')}>
          <IconButton icon="account" size={40} style={styles.featureIcon} />
          <Text style={styles.featureText}>My Profile</Text>
        </Card>

        <Card style={styles.featureCard} onPress={() => navigation.navigate('PrescriptionsScreen')}>
          <IconButton icon="pill" size={40} style={styles.featureIcon} />
          <Text style={styles.featureText}>Prescriptions</Text>
        </Card>

        <Card style={styles.featureCard} onPress={() => navigation.navigate('LabResultsScreen')}>
          <IconButton icon="flask" size={40} style={styles.featureIcon} />
          <Text style={styles.featureText}>Lab Results</Text>
        </Card>

        <Card style={styles.featureCard} onPress={() => navigation.navigate('InsuranceScreen')}>
          <IconButton icon="shield-check" size={40} style={styles.featureIcon} />
          <Text style={styles.featureText}>Insurance Info</Text>
        </Card>

        {/* New Appointments Feature */}
        <Card style={styles.featureCard} onPress={() => navigation.navigate('AppointmentsScreen')}>
          <IconButton icon="calendar" size={40} style={styles.featureIcon} />
          <Text style={styles.featureText}>Appointments</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#2260FF',
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 5,
    color: '#555',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  actionCard: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  actionIcon: {
    backgroundColor: '#E8F0FE',
    marginBottom: 5,
  },
  cardText: {
    textAlign: 'center',
    color: '#2260FF',
    fontWeight: '600',
  },
  divider: {
    marginVertical: 20,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  featureCard: {
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  featureIcon: {
    marginBottom: 5,
    backgroundColor: '#E8F0FE',
  },
  featureText: {
    color: '#2260FF',
    fontWeight: '600',
  },
});

export default HomeScreen;
