import {Pressable, StyleSheet, Text,ActivityIndicator,View} from 'react-native';
import React from 'react';
import {widthToDp, heightToDp} from '../Responsive';

const CustomButton = ({onPress,text,style,loading}) => {
  return (
    <Pressable onPress={onPress} style={style ? style : styles.container}>
      {loading ? (
        <View style={{paddingVertical: heightToDp(4)}}>
          <ActivityIndicator size="small" color="white" />
        </View>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3238a8',
    alignItems: 'center',
    marginHorizontal: widthToDp(10),
    marginTop: heightToDp(8),
    borderRadius: 8,
  },
  text: {
    color: 'white',
    paddingVertical: heightToDp(4),
    fontFamily:'OpenSans',
    fontSize: widthToDp(4.5),
    letterSpacing: -0.5,
    fontWeight: 'bold',
  },
});
