import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header/header';
import Notification from '../components/Notification/Notification';

const Notifications = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Header text="Notifications" />
      <Notification name="Vikas Kumar" caseNo="101" text="has assigned you" />
      <Notification name="Vikas Kumar" caseNo="102" text="has marked completed" />
      <Notification name="Vikas Kumar" caseNo="103" text="has assigned you" />
      <Notification name="Vikas Kumar" caseNo="104" text="has assigned you" />
      <Notification name="Vikas Kumar" caseNo="105" text="has assigned you" />
    </SafeAreaView>
  );
}

export default Notifications

const styles = StyleSheet.create({
    root:{flex:1}
})