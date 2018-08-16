import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {fetchDealsInit } from '../ajax';

export default class App extends React.Component {

 await componentDidMount: function() {

const deals = await fetchDealsInit();
console.log(deals);

},

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Sync News </Text>
        <Text>Your reliable source of news </Text>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
fontSize:30,



  },
});
