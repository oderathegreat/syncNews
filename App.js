import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {




  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Sync News </Text>

        <Text style={styles.header}>your relaible source of news</Text>






      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
fontSize:30,
color:'#fff',


  },
});
