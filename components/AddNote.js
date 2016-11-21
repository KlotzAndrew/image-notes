import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native';
import Realm from 'realm';
import schema from '../db/schema'

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        path: props.path,
        title: 'should do this soon!',
      }
    }
  }
  
  render() {
    var {height, width} = Dimensions.get('window');
    console.log('render this.state', this.state)
    return (
      <View style={styles.container}>
        <Image
          style={ styles.preview }
          source={{
            isStatic: true,
            uri: this.state.todo.path,
          }}>
          <Text style={styles.capture} onPress={() => this._saveTodo(this.state.todo)}>[ADD NOTE]</Text>
        </Image>
      </View>
    )
  }

  _saveTodo(todo) {
    console.log('this.state todo', todo)
    let realm = new Realm({
      schema: [schema.todo]
    });

    realm.write(() => {
      realm.create('Todo', {
        path: todo.path,
        title: 'should do this soon!',
      });
    });
    this.props.navigator.popToTop(0)
  }
}

const initialRoute = { id: 'IMAGE_LIST', title: 'TODO List' }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: 'green',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
