import { Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {heightToDp, widthToDp} from '../Responsive';
import { useNavigation } from '@react-navigation/native';
import { getTimeStamp } from '../TimeStamp/getTimeStamp';
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
  defectedImages
}) => {
  const navigation = useNavigation();

  const getStatus = useCallback(
    status => {
      if (status === 0) {
        return 'New';
      } else if (status === 1) {
        return 'In-Progress';
      } else if (status === 3) {
        return 'Deleted';
      } else if (status === 4) {
        return 'Rejected';
      } else if (status === 5) {
        return 'ToBEMonitored';
      } else if (status === 2) {
        return 'Completed';
      } else {
        return '';
      }
    },
    [status],
  );
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
          defectedImages:defectedImages,
          description: description,
        })
      }
      style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.MainTxt}>
          #{caseNo} - {type}
        </Text>
        {/* <Text style={{fontFamily: 'OpenSans'}}>{getTimeStamp(added_date)} ago</Text> */}
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text numberOfLines={1} style={styles.descText}>
          {description}
        </Text>
      </View>
      <View
        style={[
          styles.statusView,
          {
            backgroundColor:
              status == 3 ? 'red' : status == 2 ? 'green' : 'yellow',
          },
        ]}>
        <Text
          style={[
            styles.statusText,
            {
              color: status == 3 || status == 2 ? 'white' : 'black',
              flexDirection: 'row',
            },
          ]}>
          {getStatus(status)}
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
    fontWeight:'bold',
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
