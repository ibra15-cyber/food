
import 'expo/build/Expo.fx';
import { Platform } from 'react-native';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createElement } from 'react';

// if (__DEV__) {
//   activateKeepAwake();
// }

if (Platform.OS === 'web') {
  const rootTag = createRoot(
    document.getElementById('root') ?? document.getElementById('main')
  );

  rootTag.render(createElement(App));
} else {
  registerRootComponent(App);
}
