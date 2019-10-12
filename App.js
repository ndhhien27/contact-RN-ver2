import React from 'react'
import { } from 'react-native'
import { createAppContainer } from 'react-navigation'

import AppNavigator from './AppNavigator';
import ContactProvider from './app/Contexts/ContactContext'
const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <ContactProvider>
      <AppContainer />
    </ContactProvider>
  );
}