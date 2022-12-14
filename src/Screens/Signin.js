import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput/CustomInput';
import { heightToDp, widthToDp} from '../components/Responsive';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../AuthContext/AuthProvider'
import {API_URL, Contractor_Role} from '@env';
import {useContext, useEffect, useMemo, useState} from 'react';
import { useForm } from 'react-hook-form';
import { postRequest } from '../components/API_Request/Api_Request'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestUserPermission } from '../components/Push_Notification/Push_Notification';

const SignIn = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();
  const url = useMemo(() => API_URL + 'login', []);
  // const [loading, setLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState('')
  const {signIn, loading} = useContext(AuthContext);

  const onLogin = async(input) => {
    signIn(input);
  };
  
  return (
    <>
      {/* <ImageBackground style={{aspectRatio:1}} imageStyle={{width:width,height:height}} source={require('../../../assets/images/Building.jpg')}> */}
      <View style={styles.root}>
        <Text style={styles.text}>Contractor's Login</Text>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={widthToDp(20)}>
          <>
            <CustomInput
              placeholder="Email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Invalid Email',
                },
              }}
              name="username"
              icon="user"
            />
            <CustomInput
              control={control}
              rules={{
                required: 'Password is required',
                // minLength: {
                //   value: 8,
                //   message: 'Password should be minimum 8 characters',
                // },
                // pattern: {
                //   value:
                //     /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                //   message:
                //     'Password should contain  a special character, digit and an uppercase alphabet',
                // },
              }}
              name="password"
              placeholder="Password"
              icon="lock"
              secureTextEntry
            />

            <CustomButton
              loading={loading}
              onPress={handleSubmit(onLogin)}
              text="Login"
            />
          </>
        </KeyboardAvoidingView>
      </View>

      {/* </ImageBackground> */}
      {/* <Text style={{ position: 'absolute', bottom: heightToDp(2), alignSelf: 'center', fontSize: widthToDp(7), fontWeight: 'bold', color: 'black' }}>Appwrk</Text> */}
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  text: {
    fontSize: widthToDp(8),
    // fontFamily: 'OpenSans',
    fontWeight: '700',
    color: '#3238a8',
    marginLeft: widthToDp(10),
    marginVertical: heightToDp(25),
  },
});

export default SignIn;
