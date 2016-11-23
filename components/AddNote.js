import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  TextInput,
} from 'react-native';
import Realm from 'realm';
import schema from '../db/schema'

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        path: props.path,
        title: '',
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
          <View style={ styles.noteBox }>
            <Text style={ styles.textButton } onPress={() => this._saveTodo(this.state.todo)}>Save Note</Text>
            <TextInput
              style={ styles.textInput }
              value={this.state.todo.title}
              maxLength={ 140 }
              placeholder={ 'Add a note...' }
              onChangeText={(text) => this.setState({todo: Object.assign({}, this.state.todo, {title: text})})}/>
          </View>
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
        title: todo.title,
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
  textButton: {
    flex: 0,
    backgroundColor: 'green',
    color: '#fff',
    margin: 5,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
  },
  textInput: {
    flex: 0,
    backgroundColor: 'grey',
    color: '#fff',
    margin: 5,
    borderRadius: 5,
  },
  noteBox: {
    flex: 0,
    width: Dimensions.get('window').width*0.8,
    backgroundColor: '#fff',
    marginBottom: 50,
    borderRadius: 5,
  }
});
