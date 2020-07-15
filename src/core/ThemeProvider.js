import React, { useState, useEffect } from 'react';
import { useColorScheme, Appearance } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { DayTheme, NightTheme } from './themes';
import AsyncStorage from '@react-native-community/async-storage';
import { isDarkModeSupported } from './helpers';

const STORAGE_KEY = "THEME_KEY";
const THEMES = ["themeDay", "themeNight", "themeSystem"];


export const ThemeContext = React.createContext({});

const getTheme = (theme, systemScheme) => {  
  if (theme === "themeSystem") { return systemScheme === 'dark' ? NightTheme : DayTheme; }
  return theme === "themeNight" ? NightTheme : DayTheme;
} 

export const ThemeContextProvider = ({ children }) => {
  
  const [themeName, setThemeName] = useState();
  const systemScheme = useColorScheme();

  // save theme into AsyncStorage
  const saveTheme = async (theme) => {
    setThemeName(theme);
    await AsyncStorage.setItem(STORAGE_KEY, themeName);
  }
  
  // when themecontextprovider first loads, run this
  useEffect( () => {

    async function getData() {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      // retrieve data from AsyncStorage upon start
      if (value !== null) {
        setThemeName(value);
      } else {
        // support for OS which does not support system-wide darkmode
        if (isDarkModeSupported()) {setThemeName(THEMES[2])}
        else {setThemeName(THEME[0])}
      }
    }

    getData()
    

  }, []);

  return (
    <ThemeContext.Provider value={{themeName, saveTheme}}>
      <NavigationContainer theme={getTheme(themeName, systemScheme)}>
        {children}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
