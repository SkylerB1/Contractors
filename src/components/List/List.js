import { Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {heightToDp, widthToDp} from '../Responsive';
import { useNavigation } from '@react-navigation/native';
const List = ({
  type,
  status,
  caseNo,
  description,
  apartment_no,
  priority,
  notes,
  added_date,
  due_date,
}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('CaseDetail', {
          caseNo: caseNo,
          status: status,
          apartment_no: apartment_no,
          priority: priority,
          notes: notes,
          added_date: added_date,
          due_date: due_date,
          subject: type,
          description:description
        })
      }
      style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.MainTxt}>
          #{caseNo} - {type}
        </Text>
        <Text style={{fontFamily: 'OpenSans'}}>6 days ago</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text numberOfLines={1} style={styles.descText}>
          {description}
        </Text>
      </View>
      <View
        style={[
          styles.statusView,
          {backgroundColor: status == 0 ? 'yellow' : 'green'},
        ]}>
        <Text
          style={[
            styles.statusText,
            {
              color: status == 0 ? 'black' : 'white',
              flexDirection: 'row',
            },
          ]}>
          {status == 0 ? 'Pending' : 'Completed'}
        </Text>
      </View>
    </Pressable>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: '3.5%',
    marginTop:'3%',
    borderRadius: 8,
    padding: widthToDp(2),
    elevation:4
    // borderWidth: 1,
    // borderColor: '#3238a8',
  },
  statusView: {
    // borderWidth: 1,
    // borderColor: '#3238a8',
    // width: widthToDp(20),
    elevation:3,
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexWrap:'nowrap'
  },
  descText: {
    marginVertical: widthToDp(2),
    fontFamily: 'OpenSans',
  },
  statusText: {
    fontSize: widthToDp(3.2),
    padding: widthToDp(2),
    letterSpacing: 0.2,
    fontFamily: 'OpenSans',
  },
  MainTxt: {
    fontSize: widthToDp(4.2),
    fontFamily: 'OpenSans',
    fontWeight: '700',
    color: 'black',
    flex: 1,
    letterSpacing: -0.5,
  },
});
