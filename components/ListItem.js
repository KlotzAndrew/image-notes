import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';

export default class ListItem extends Component {
  render() {
    return (
      <View >
        <Text>{this.props.title}:</Text>
      </View>
    );
  }
}

