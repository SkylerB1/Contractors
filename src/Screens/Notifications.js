import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header/header';
import Notification from '../components/Notification/Notification';

const Notifications = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header text="Notifications" />
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text>This screen is under development!</Text>
      </View>
    </SafeAreaView>
  );
}

export default Notifications

const styles = StyleSheet.create({
    root:{flex:1}
})