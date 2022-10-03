import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header/header';
import Notice from '../components/Notice/Notice';
import {heightToDp} from '../components/Responsive';

const NoticeBoard = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <Header text="Notice Board" />
      <ScrollView>
        <Notice
          title="Lift Maintenance"
          description="This is to inform you that the lift will be under maintenance from 1st to 5th December"
          name="Vikas Kumar"
          time="6 days ago"
        />
        <Notice
          title="Lift Maintenance"
          description="This is to inform you that the lift will be under maintenance from 1st to 5th December"
          name="Vikas Kumar"
          time="6 days ago"
        />
        <Notice
          title="Lift Maintenance"
          description="This is to inform you that the lift will be under maintenance from 1st to 5th December"
          name="Vikas Kumar"
          time="6 days ago"
        />
        <Notice
          title="Lift Maintenance"
          description="This is to inform you that the lift will be under maintenance from 1st to 5th December"
          name="Vikas Kumar"
          time="6 days ago"
        />
        <Notice
          title="Lift Maintenance"
          description="This is to inform you that the lift will be under maintenance from 1st to 5th December"
          name="Vikas Kumar"
          time="6 days ago"
        />
        <Notice
          title="Lift Maintenance"
          description="This is to inform you that the lift will be under maintenance from 1st to 5th December"
          name="Vikas Kumar"
          time="6 days ago"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoticeBoard;

const styles = StyleSheet.create({
  mainView: {flex: 1, marginBottom: heightToDp(3)},
});
