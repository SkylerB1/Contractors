import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { widthToDp,heightToDp } from '../Responsive';
import Notifications from '../../../assets/images/Notifications.svg';


const Notification = ({name,caseNo,text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={{marginRight: widthToDp(2)}}>
          <Notifications
            width={widthToDp(5)}
            height={heightToDp(5)}
            fill="#3238a8"
          />
        </View>
        <Text style={[styles.txt, {fontWeight: 'bold'}]}>{name} </Text>
        <Text style={styles.txt}> {text} </Text>
        <Text style={styles.txt}>case #{caseNo} </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: widthToDp(3),
    padding: widthToDp(3),
  },
  textContainer: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: widthToDp(3.5),
    color: 'black',
    fontFamily: 'OpenSans',
  },
});
