import React from 'react';
import { SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';
 
const HomeScreen = () => {
  const { colors, dark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>
      <StatusBar
        backgroundColor={colors.status_bar}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Text style={{color: colors.text}}>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default HomeScreen;