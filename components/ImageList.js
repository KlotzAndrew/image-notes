import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import ListItem from './ListItem'

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListItem title={title1} />
        <ListItem title={title2} />
      <TouchableOpacity onPress={() => { this.props.navigator.push(sceneA) }}>
        <ListItem title={title3} />
      </TouchableOpacity>
      </View>
    );
  }

}

const sceneA = { title: 'my new scene!', id: 'IMAGE_ITEM', filepath: 'some-img-path.jpg' }
const title1 = 'Soon to be an awesome list of photos 1'
const title2 = 'Soon to be an awesome list of photos 2'
const title3 = 'Soon to be an awesome list of photos 3'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

