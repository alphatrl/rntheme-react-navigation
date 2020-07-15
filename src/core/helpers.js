import { Platform } from 'react-native';

// System
// Get major OS Version (e.g iOS 10.3, returns 10)
export const getMajorPlatformVersion = () => {
  return parseInt(Platform.Version, 10);
}

export const isDarkModeSupported = () => {
  return (Platform.OS === 'ios' && getMajorPlatformVersion() >= 13) || 
    (Platform.OS === 'android' && getMajorPlatformVersion() >= 29);
}