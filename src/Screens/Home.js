import {StyleSheet, Text, View, StatusBar, Image, Pressable} from 'react-native';
import React, {useMemo, useState, useEffect, useContext} from 'react';
import {heightToDp, widthToDp} from '../components/Responsive';
import Menu from '../../assets/images/Menu.svg';
import Location from '../../assets/images/Location.svg';
import Weather from '../../assets/images/Weather.svg';
import Request from '../components/User Request/Request';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import { AuthContext } from '../AuthContext/AuthProvider';

const Home = () => {
  const date = useMemo(() => new Date().toDateString().slice(3, 10), []);
  const [temp, setTemp] = useState(0);
  const [weather, setWeather] = useState('');
  const {signOut} = useContext(AuthContext);

  const getWeatherInfo = async cityname => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6b06c6f68853933f09baeb8a2f7175df&units=metric`,
      );

      if (response.status == 200) {
        const data = await response.json();
        let temp = Math.round(data.main.temp);
        setTemp(temp);
        setWeather(data.weather[0].description);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo('Sydney');
  }, []);
  return (
    <View style={styles.root}>
      <StatusBar translucent barStyle={'light-content'} />
      <View style={styles.backgroundView}>
        {/* <View style={styles.topView}>
          <Menu width={widthToDp(6)} height={heightToDp(6)} fill="white" />

          <View style={styles.imgBorder}>
            <Image
              style={{width: widthToDp(8), height: heightToDp(8)}}
              source={require('../../assets/images/chatprofile.png')}
            />
          </View>
        </View> */}
        <View style={styles.MainTextView}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.buildingNameText}>XPERT FMS</Text>
        </View>
        <View style={styles.weatherView}>
          <Weather width={widthToDp(15)} height={heightToDp(15)} fill="white" />
          <View style={styles.weatherTextView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <View style={styles.weatherContainer}>
                <Text style={styles.tempText}>{temp}°C</Text>
                <View style={styles.locationView}>
                  <Location
                    width={widthToDp(3)}
                    height={heightToDp(3)}
                    fill="white"
                  />
                  <Text style={styles.locationText}>SYDNEY</Text>
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.weatherText}>{weather}</Text>
              <Text style={styles.weatherText}>{date}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Request text1="Assigned" text2="Cases" route="Cases" icon="Tasks" />
        <Request
          text1="Information"
          text2="Board"
          route="NoticeBoard"
          icon="Notice"
        />
        <Request
          text1="Notifications"
          text2=""
          route="Notifications"
          icon="Notification"
        />

        {/* <Request text1="Notice Board" text2="" route="" icon="Notice" />
        <Request text1="Staff Members" text2="" route="" icon="Staff" /> */}
        {/* <Request
          text1="Notice Board"
          route=""
          icon="Notice"
        /> */}
        {/* <Pressable onPress={signOut}>
          <Text>Logout</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundView: {
    height: heightPercentageToDP('70%'),
    backgroundColor: '#3238a8',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  topView: {
    flexDirection: 'row',
    marginTop: '20%',
    justifyContent: 'space-between',
    paddingHorizontal: widthToDp(3),
  },
  imgBorder: {
    width: widthToDp(9),
    height: heightToDp(9),
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainTextView: {marginLeft: widthToDp(3), marginTop: '40%'},
  welcomeText: {
    color: 'white',
    fontSize: widthToDp(3.5),
    opacity: 0.5,
    letterSpacing: 1,
    fontFamily: 'OpenSans',
  },
  buildingNameText: {
    color: 'white',
    fontSize: widthToDp(7),
    letterSpacing: 1,
    marginTop: widthToDp(2),
    fontFamily: 'OpenSans',
  },
  weatherView: {
    paddingHorizontal: widthToDp(3),
    marginTop: heightToDp(25),
    flexDirection: 'row',
  },
  weatherTextView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: widthToDp(2),
  },
  weatherContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  tempText: {
    fontSize: widthToDp(5.5),
    color: 'white',
    fontFamily: 'OpenSans',
  },
  locationView: {flexDirection: 'row', alignItems: 'center'},
  requestText: {
    fontSize: widthToDp(3.5),
    alignSelf: 'center',
    color: 'black',
    fontWeight: '400',
    opacity: 0.7,
    letterSpacing: -0.5,
    fontFamily: 'OpenSans',
  },
  locationText: {
    marginLeft: widthToDp(1.5),
    fontSize: widthToDp(3.5),
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2.5,
    fontFamily: 'OpenSans',
  },
  weatherText: {
    fontSize: widthToDp(3.2),
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.5,
    fontFamily: 'OpenSans',
  },
  card: {
    position: 'absolute',
    bottom: heightToDp(5),
    left: heightToDp(5),
    right: heightToDp(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '50%',
    // paddingLeft: widthToDp(8),
    // justifyContent:'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
