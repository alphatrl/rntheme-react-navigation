import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../core/ThemeProvider';
import { isDarkModeSupported } from '../core/helpers';

const THEMES_SUPPORT = ["Day", "Night"];
const THEMES_SUPPORT_AUTO =  [...THEMES_SUPPORT, "System"];
 
const Settings = () => {
  const { colors, dark } = useTheme();
  const { saveTheme } = useContext(ThemeContext);
  const AVAILABLE_THEMES = isDarkModeSupported() ? THEMES_SUPPORT_AUTO : THEMES_SUPPORT;

  const onPress = (theme) => {
    switch(theme) {
      case "Day":
        saveTheme('themeDay');
        break;
      case "Night":
        saveTheme('themeNight')
        break;
      case "System":
        saveTheme('themeSystem');
      break;
    }
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>
      <StatusBar
        backgroundColor={colors.status_bar}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      {
        AVAILABLE_THEMES.map((title, index) => (
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={()=>onPress(title)}
          >
            <Text style={{color: colors.text}}>{title}</Text>
          </TouchableOpacity>
        ))
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
  },

  button: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
    borderWidth: 1,
  }
});

export default Settings;