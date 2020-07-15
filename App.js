import React from 'react';
import 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import Settings from './src/screens/Settings';
import { ThemeContextProvider } from './src/core/ThemeProvider';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOption={{
        inactiveTintColor: colors.icon,
        style: {
          elevation: 5,
          backgroundColor: colors.tab_bar,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ThemeContextProvider>
      <TabNavigator />
    </ThemeContextProvider>
  );
};

export default App;
