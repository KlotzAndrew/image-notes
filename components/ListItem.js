import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ListItem extends Component {
  render() {
    const sceneA = { title: 'my new scene!', id: 'IMAGE_ITEM', todo: this.props.todo }

    return (
      <TouchableOpacity onPress={() => { this.props.navigator.push(sceneA) }}>
        <Image
          style={styles.image}
          source={{
              isStatic: true,
              uri: 'data:image/jpeg;base64,'+ this.props.todo.imageString,
          }}
        />
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#eee',
  },
});

