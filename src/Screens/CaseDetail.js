import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header/header';
import { widthToDp,heightToDp } from '../components/Responsive'
import Item from '../components/Details Item/Item';
import CustomButton from '../components/CustomButton/CustomButton';
// import { useNavigation } from '@react-navigation/native'

const CaseDetail = ({ route,navigation }) => {

  const {caseNo, status,subject, apartment_no, priority,description, notes, added_date, due_date} = route.params;

  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(false)
  }
  const onSubmit = () => {
    Alert.alert(
      '',
      'Thanks for your work. Your remarks has been sent to owner for review.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Cases'),
        },
      ],
    );
    
  }
  return (
    <SafeAreaView style={styles.root}>
      <Header text="Case Details" />
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <Pressable onPress={handleDropDown}>
          <Item heading="Case No." details={caseNo} />
          <Item heading="Case Type" details="Electricity" />
          <Item heading="Apartment No." details={apartment_no ? apartment_no:'null'} />
          <Item heading="Priority" details={priority} />
          <Item heading="Subject" details={subject} />
          <Item
            heading="Description"
            details={description}
          />
          <Item
            heading="Notes"
            details={notes}
          />
          <Item heading="Added" details={added_date} />
          <Item heading="Due" details={due_date? due_date :'null'} />
          <Item
            heading="Status"
            details={status == 0 ? 'Pending' : 'Completed'}
          />
          {status == 1 && (
            <Item heading="Feedback" details="Satisfied with the work" />
          )}
          {status == 0 && (
            <>
              <Text style={styles.heading}>Remarks</Text>
              <View style={styles.line} />
              <Item heading="Work Status" dropDown={dropDown} setDropDown={setDropDown} dropdown />
              <Item heading="Remarks" input />
            </>
          )}
        </Pressable>
      </ScrollView>
      {status == 0 && <CustomButton text="Submit" onPress={onSubmit} style={styles.btn} />}
    </SafeAreaView>
  );
}

export default CaseDetail

const styles = StyleSheet.create({
  root: {flex: 1},
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    margin: widthToDp(4),
    borderRadius: widthToDp(2),
  },
  heading: {
    color: '#3238a8',
    fontSize: widthToDp(5),
    fontWeight: 'bold',
    margin: widthToDp(3),
    letterSpacing:1
  },
  line: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: '#3238a8',
    marginHorizontal: widthToDp(3),
  },
  btn: {
    backgroundColor: '#3238a8',
    alignItems: 'center',
    marginHorizontal: widthToDp(4),
    marginBottom: heightToDp(4),
    borderRadius: 8,
  },
});