import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {widthToDp} from '../Responsive';
import {Col, Row, Grid} from 'react-native-easy-grid';


const TableView = ({description, ticket, checked, status}) => {
  return (
    <View style={styles.container}>
      <Grid>
        <Col style={{borderLeftWidth:1}}>
          <Row style={styles.row}>
            <Text style={styles.MainTxt}>#{ticket}</Text>
          </Row>
        </Col>
        <Col size={widthToDp(1)}>
          <Row style={[styles.row]}>
            <Text style={styles.MainTxt}>{description}</Text>
          </Row>
        </Col>
        <Col size={widthToDp(0.5)}>
          <Row style={styles.row}>
            <Text
              style={[
                styles.MainTxt,
                {
                  backgroundColor: status == 0 ? 'yellow' : 'green',
                  color: status == 0 ? 'black' : 'white',
                },
              ]}>
              {status == 0 ? 'Pending' : 'Completed'}
            </Text>
          </Row>
        </Col>
      </Grid>
    </View>
  );
};

export default TableView;

const styles = StyleSheet.create({
  container: {
    
  },
  row:{
      borderWidth: 1,
          
  },
  MainTxt: {
    fontSize: widthToDp(4.2),
    color: 'black',
    flex: 1,
    letterSpacing: -0.5,
    padding:widthToDp(2)
  },
  StatusView: {
    borderRadius: 20,
  },
  StatusTxt: {
    padding: widthToDp(1.5),
    fontSize: widthToDp(3),
  },
});
