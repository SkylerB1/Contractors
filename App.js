import React, { useEffect } from 'react';

import { StatusBar} from 'react-native';
import AppNav from './src/Navigation/AppNav';
import { notificationListner } from './src/components/Push_Notification/Push_Notification';
import AuthProvider from './src/AuthContext/AuthProvider';

const App = () => {
  useEffect(() => {
    notificationListner()
  })
  return (
    <AuthProvider>
      <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
      <AppNav />
    </AuthProvider>
  );
};

export default App;
