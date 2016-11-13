import React, { Component } from 'react';
import ImageList from './/ImageList'
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
        />
        <ImageList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

