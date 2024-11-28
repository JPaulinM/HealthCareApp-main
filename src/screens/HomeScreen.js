import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Text, IconButton, Card, Menu, FAB } from 'react-native-paper';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleEmergency = () => {
    navigation.navigate('EmergencyScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          {/* Profile Button */}
          <IconButton
            icon="account"
            size={30}
            style={styles.profileIcon}
            onPress={() => navigation.navigate('ProfileScreen')}
          />

          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#999"
          />

          {/* Notification Button */}
          <IconButton
            icon="bell"
            size={30}
            style={styles.notificationIcon}
            onPress={() => navigation.navigate('NotificationsScreen')}
          />
        </View>

        <Text variant="headlineLarge" style={styles.headerText}>
          Hello, John!
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Let’s prioritize your health today.
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Feature Cards */}
        <View style={styles.featureGrid}>
          {/* Chat with Dr. GPT */}
          <Card style={styles.featureCard} onPress={() => navigation.navigate('ChatScreen')}>
            <IconButton icon="chat" size={30} style={styles.cardIcon} />
            <Text style={styles.cardText}>Chat with Dr.GPT</Text>
          </Card>
          <Card style={styles.featureCard} onPress={() => navigation.navigate('HealthTipsScreen')}>
            <IconButton icon="heart" size={30} style={styles.cardIcon} />
            <Text style={styles.cardText}>Health Tips</Text>
          </Card>
          {/* Settings */}
          <Card style={styles.featureCard} onPress={() => navigation.navigate('SettingsScreen')}>
            <IconButton icon="cog" size={30} style={styles.cardIcon} />
            <Text style={styles.cardText}>Settings</Text>
          </Card>
        </View>
      </ScrollView>

      {/* Floating Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <IconButton
          icon="home"
          size={40}
          style={styles.bottomIcon}
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <IconButton
          icon="calendar"
          size={40}
          style={styles.bottomIcon}
          onPress={() => navigation.navigate('AppointmentsScreen')}
        />
        <IconButton
          icon="pill"
          size={40}
          style={styles.bottomIcon}
          onPress={() => navigation.navigate('PrescriptionsScreen')}
        />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="menu"
              size={40}
              style={styles.bottomIcon}
              onPress={openMenu}
            />
          }
        >
          <Menu.Item
            onPress={() => {
              closeMenu();
              navigation.navigate('LabResultsScreen');
            }}
            title="Lab Results"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              navigation.navigate('InsuranceScreen');
            }}
            title="Insurance Info"
          />
          <Menu.Item
            onPress={() => {
              closeMenu();
              navigation.navigate('FindDoctorScreen');
            }}
            title="Find a Doctor"
          />
        </Menu>
      </View>

      {/* Emergency Floating Button */}
      <FAB
        style={styles.emergencyButton}
        icon="phone"
        label="Emergency"
        color="#FFF"
        onPress={handleEmergency}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#2260FF',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D0D9FF',
    marginTop: 5,
  },
  profileIcon: {
    backgroundColor: '#FFFFFF33',
  },
  notificationIcon: {
    backgroundColor: '#FFFFFF33',
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  scrollContent: {
    padding: 20,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: (width - 60) / 2,
    marginBottom: 15,
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    marginBottom: 10,
    backgroundColor: '#E8F0FE',
  },
  cardText: {
    color: '#2260FF',
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  bottomIcon: {
    backgroundColor: '#DBEAFE',
  },
  emergencyButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#FF4D4D',
    elevation: 6,
  },
});

export default HomeScreen;
