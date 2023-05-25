import React from 'react';
import {
  StyleSheet, Text, View, useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FeedScreen from './app/screens/FeedScreen';
import ArticleScreen from './app/screens/ArticleScreen';
import CustomDrawerContent from './app/components/CustomDrawerContent';
import { getHeaderTitle } from '@react-navigation/elements';
import { ProfileScreen } from './app/screens/ProfileScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';


const Drawer = createDrawerNavigator();

function MyHeader({ title }) {

  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

function App() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Feed"
          component={FeedScreen}
          options={{ drawerLabel: 'Feed' }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ drawerLabel: 'Setting' }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ drawerLabel: 'Profile' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
