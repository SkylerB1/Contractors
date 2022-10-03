import { StyleSheet, View,ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size={'large'} color='#3238a8' />
    </View>
  );
}

export default Loader

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent:'center'
    }
})