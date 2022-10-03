import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { widthToDp ,heightToDp} from '../Responsive';
import Maintenance from '../../../assets/images/Maintenance.svg';
import Bookings from '../../../assets/images/Bookings.svg';
import NoticeBoard from '../../../assets/images/NoticeBoard.svg';
import Staff from '../../../assets/images/Staff.svg';
import Tasks from '../../../assets/images/Tasks.svg';
import Notificaitions from '../../../assets/images/Notifications.svg';


const Request = ({route,text1,text2,icon}) => {
    const navigation = useNavigation()

    const getIcons = () => {
      switch (icon) {
        case 'Maintenance':
          return (
            <Maintenance
              width={widthToDp(10)}
              height={heightToDp(10)}
              fill="#3238a8"
            />
          );
        case 'Booking':
          return (
            <Bookings
              width={widthToDp(10)}
              height={heightToDp(10)}
              fill={'#3238a8'}
            />
          );
        case 'Notice':
          return (
            <NoticeBoard
              width={widthToDp(11)}
              height={heightToDp(11)}
              fill={'#3238a8'}
            />
          );
        case 'Staff':
          return (
            <Staff
              width={widthToDp(11)}
              height={heightToDp(11)}
              fill={'#3238a8'}
            />
          );
        case 'Tasks':
          return (
            <Tasks
              width={widthToDp(11)}
              height={heightToDp(11)}
              fill={'#3238a8'}
            />
          );
        case 'Notification':
          return (
            <Notificaitions
              width={widthToDp(10)}
              height={heightToDp(10)}
              fill={'#3238a8'}
            />
          );
        default:
          return null;
      }
    };
  return (
      <TouchableOpacity
          style={{alignItems: 'center',marginTop:widthToDp(12),marginHorizontal:widthToDp(8)}}
          disabled={route==''&& true}
          onPress={() => navigation.navigate(route)}>   
          {getIcons()}
          <View style={{marginTop: widthToDp(2)}}>
              <Text style={styles.requestText}>{ text1}</Text>
            <Text style={styles.requestText}>{text2}</Text>
          </View>
        </TouchableOpacity>
  )
}

export default Request

const styles = StyleSheet.create({
  requestText: {
    fontSize: widthToDp(3.5),
    alignSelf: 'center',
    color: 'black',
    fontWeight: '400',
    opacity: 0.7,
    letterSpacing: -0.5,
    fontFamily: 'OpenSans',
  },
});