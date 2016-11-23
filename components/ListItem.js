import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ListItem extends Component {
  render() {
    const sceneA = { title: this.props.todo.title, id: 'IMAGE_ITEM', todo: this.props.todo }

    return (
      <TouchableOpacity onPress={() => { this.props.navigator.push(sceneA) }}>
        <View style={styles.todoRow}>
          <Image
            style={styles.image}
            source={{
                isStatic: true,
                uri: this.props.todo.path,
            }}
          />
          <Text>{this.props.todo.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    margin: 10,
    backgroundColor: '#eee',
  },
  todoRow: {
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.95,
    backgroundColor: '#eee',
    margin: 5,
    borderRadius: 5,
  },
});

