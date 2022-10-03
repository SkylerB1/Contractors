import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../AuthContext/AuthProvider';
import Loader from '../components/Loader/Loader';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Cases from '../Screens/Cases';
import CaseDetail from '../Screens/CaseDetail';
import NoticeBoard from '../Screens/NoticeBoard';
import Notification from '../Screens/Notifications';
import SignIn from '../Screens/Signin';
const Stack = createNativeStackNavigator();

const AppNav = () => {
  const {token, loading} = useContext(AuthContext);

  if (loading) {
    return <Loader/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cases" component={Cases} />
            <Stack.Screen name="CaseDetail" component={CaseDetail} />
            <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
            <Stack.Screen name="Notifications" component={Notification} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
