import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // console.log(enabled)

  if (enabled) {
      try {
        const fcmToken = await messaging().getToken();

        if (fcmToken) {
          return fcmToken;
        }
      } catch (error) {
        return null;
        // console.log(error);
      }
  } else {
    Alert.alert(
      'Require Permission',
      'Please enable messaging permission from the app setting.',
    );
  }
};

export const notificationListner = async () => {
   messaging().onMessage(async remoteMessage => {
    //  console.log(remoteMessage);
     PushNotification.localNotification({
       channelId: 1,
       message: remoteMessage.notification.body,
       title: remoteMessage.notification.title,
     });
   });
   messaging().setBackgroundMessageHandler(async remoteMessage => {
     console.log('Background Notification', remoteMessage);
   });
  // messaging().onNotificationOpenedApp();
  // messaging().onMessage();
  // messaging().getInitialNotification();
  
};
