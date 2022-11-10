import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {API_URL} from '@env';
import Header from '../components/Header/header';
import {widthToDp, heightToDp} from '../components/Responsive';
import Item from '../components/Details Item/Item';
import CustomButton from '../components/CustomButton/CustomButton';
import {postRequest} from '../components/API_Request/Api_Request';
import ImageModal from 'react-native-image-modal';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import { useNavigation } from '@react-navigation/native'

const CaseDetail = ({route, navigation}) => {
  const {
    caseNo,
    status,
    subject,
    apartment_no,
    priority,
    description,
    defectedImages,
    added_date,
    due_date,
  } = route.params;

  // console.log(defectedImages);

  const [dropDown, setDropDown] = useState(false);
  const updateStatusUrl = useMemo(() => API_URL + 'update-cases-status', []);
  const [workStatus, setWorkStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDropDown = () => {
    setDropDown(false);
  };

  const onSubmit = async () => {
    setLoading(true);
    if (workStatus != null) {
      let data = {
        status: workStatus,
        caseId: caseNo,
      };
      console.log(data)

      const response = await postRequest(updateStatusUrl, data);
      if (response.status == 200) {
        // console.log(response);
        setLoading(false);
        Alert.alert(
          'Success',
          'Thanks for your work. Your remarks has been sent to owner for review.',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Cases'),
            },
          ],
        );
      } else {
        console.log(response)
        setLoading(false);
        Alert.alert(
          'Oops!',
          'Some error occurred at server-side. Please try again after sometime.',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Cases'),
            },
          ],
        );
      }
    }
  };
  const getStatus = useCallback(
    status => {
      if (status === 0) {
        return 'New';
      } else if (status === 1) {
        return 'InProgress';
      } else if (status === 2) {
        return 'Completed';
      } else if (status === 3) {
        return 'Deleted';
      } else if (status === 4) {
        return 'Rejected';
      } else if (status === 5) {
        return 'ToBEMonitored';
      } else {
        return '';
      }
    },
    [status],
  );
  const showRemarks = useCallback(
    status => {
      if (status === 0 || status === 1) {
        return true;
      } else {
        return false;
      }
    },
    [status],
  );

  return (
    <SafeAreaView style={styles.root}>
      <Header text="Case Details" />
      <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false}>
        <Pressable onPress={handleDropDown}>
          <Item heading="Case No." details={caseNo} />
          <Item heading="Case Type" details="Electricity" />
          <Item
            heading="Apartment No."
            details={apartment_no ? apartment_no : 'null'}
          />
          <Item heading="Priority" details={priority} />
          <Item heading="Subject" details={subject} />
          <Item heading="Description" details={description} />
          {/* <Item
            heading="Notes"
            details={notes}
          /> */}
          <Item heading="Added" details={added_date} />
          <Item heading="Due" details={due_date ? due_date : 'null'} />
          <Item heading="Status" details={getStatus(status)} />
          {showRemarks(status) && <View>
            <Text style={styles.heading}>Defect's Images</Text>
            <View style={styles.line} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: '3%',
              }}>
              {/* <Image style={{width:widthPercentageToDP('20%'),height:heightPercentageToDP('15%'),borderRadius:5}} source={{uri:'http://54.79.105.63/xpert-fms/public/cases/' + defectedImages[0].name}} /> */}
              {defectedImages?.map((item, index) => {
                return (
                  <View key={index} style={{marginHorizontal: '2%'}}>
                    <ImageModal
                      resizeMode="contain"
                      imageBackgroundColor="black"
                      style={{
                        width: widthPercentageToDP('50%'),
                        height: undefined,
                        aspectRatio:1,
                        borderRadius: 5,
                      }}
                      isTranslucent={true}
                      source={{
                        uri:
                          'http://54.79.105.63/xpert-fms/public/cases/' +
                          item.name,
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </View>}
          
          {showRemarks(status) && (
            <>
              <Text style={styles.heading}>Update work status</Text>
              <View style={styles.line} />
              <Item
                heading="Work Status"
                workStatus={workStatus}
                setWorkStatus={setWorkStatus}
                dropDown={dropDown}
                setDropDown={setDropDown}
                dropdown
              />
              {/* <Item heading="Remarks" input /> */}
            </>
          )}
        </Pressable>
      </ScrollView>
      {showRemarks(status) && (
        <CustomButton
          text="Submit"
          loading={loading}
          onPress={onSubmit}
          style={styles.btn}
        />
      )}
    </SafeAreaView>
  );
};

export default CaseDetail;

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
    letterSpacing: 1,
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
