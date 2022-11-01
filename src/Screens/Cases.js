import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import Header from '../components/Header/header';
import List from '../components/List/List';
import {API_URL} from '@env';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {postRequest} from '../components/API_Request/Api_Request';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {AuthContext} from '../AuthContext/AuthProvider';
import { useIsFocused } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Cases = () => {
  const FormUrl = useMemo(() => API_URL + 'get-all-cases', []);
  // const [userData, setUserData] = useState()
  const [pendingCases, setPendingCases] = useState([]);
  const [completedCases, setCompletedCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused()

  const {userData} = useContext(AuthContext);

  const getCases = async () => {
    setLoading(true);
    let data = {
      userId: userData?.id,
    };

    // console.log(data);
    const response = await postRequest(FormUrl, data);

    if (response.status == 200) {
      // console.log(response.data)
      let pendingItems = [];
      let completedItems = [];
      response.data.map(item => {
        if (item.case_status != 2) {
          pendingItems.push(item);
        } else {
          completedItems.push(item);
        }
      });
      setPendingCases(pendingItems);
      setCompletedCases(completedItems);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCases();
  }, [userData,isFocused]);

  // useEffect(() => {
  //   console.log('Pending Cases',pendingCases);
  // }, [pendingCases]);

  // useEffect(() => {
  //   console.log('Completed Cases',completedCases);
  // }, [completedCases]);

  const PendingCases = () => {
    return (
      <ScrollView style={styles.mainView}>
        {loading ? (
          <View style={{marginTop: widthPercentageToDP('5%')}}>
            <ActivityIndicator size={'large'} color={'#3238a8'} />
          </View>
        ) : pendingCases.length == 0 ? (
          <Text style={styles.noCasesText}>No cases to show</Text>
        ) : (
          pendingCases.map((item, index) => {
              return (
                <List
                  key={index}
                  type={item.title}
                  caseNo={item.case_number}
                  description={item.description}
                  apartment_no={item.apartment_no}
                  priority={item.priority}
                  notes={item.notes}
                  added_date={item.added_date}
                  due_date={item.due_date}
                  status={item.case_status}
                  defectedImages={JSON.parse(item.defected_images)}
                />
              );
            
          })
        )}
        {/* {Cases.length == 0 && <Text>No case to show.</Text>} */}
      </ScrollView>
    );
  };
  const CompletedCases = () => {
    return (
      <ScrollView style={styles.mainView}>
        {loading ? (
          <View style={{marginTop: widthPercentageToDP('5%')}}>
            <ActivityIndicator size={'large'} color={'#3238a8'} />
          </View>
        ) : completedCases.length == 0 ? (
          <Text style={styles.noCasesText}>No cases to show.</Text>
        ) : (
          completedCases.map((item, index) => {
              return (
                <List
                  key={index}
                  type={item.title}
                  caseNo={item.case_number}
                  description={item.description}
                  apartment_no={item.apartment_no}
                  priority={item.priority}
                  notes={item.notes}
                  added_date={item.added_date}
                  due_date={item.due_date}
                  status={item.case_status}
                />
              );
            
          })
        )}
      </ScrollView>
    );
  };
  // const renderScene = SceneMap({
  //   first: pendingCases,
  //   second: completedCases,
  // });
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar translucent barStyle={'light-content'} />
      <Header text="Assigned Cases" />
      <Tab.Navigator>
        <Tab.Screen name="Pending" component={PendingCases} />
        <Tab.Screen name="Completed" component={CompletedCases} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Cases;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  noCasesText: {
    textAlign: 'center',
    marginTop: '2%',
    fontSize: widthPercentageToDP('4%'),
    color: 'D3D3D3',
  },
});
