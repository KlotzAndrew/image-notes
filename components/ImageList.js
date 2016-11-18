import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
} from 'react-native';
import ListItem from './ListItem'
import Realm from 'realm';

export default class Root extends Component {
  render() {
    let realm = new Realm({
      schema: [{name: 'Todo', properties: {imageString: 'string'}}]
    });

    return (
      <View style={styles.container}>
        <Text>count todos: {realm.objects('Todo').length}</Text>
        {this._listTodos(realm)}
      </View>
    );
  }

  _listTodos(realm) {
    return realm.objects('Todo').map((todo, i) =>
      <ListItem
        key={i}
        todo={todo}
        navigator={ this.props.navigator }
      />
    )
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

