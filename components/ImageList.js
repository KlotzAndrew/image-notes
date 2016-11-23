import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import ListItem from './ListItem'
import Realm from 'realm';
import schema from '../db/schema'

export default class Root extends Component {
  render() {
    let realm = new Realm({
      schema: [schema.todo]
    });

    return (
      <View style={styles.container}>
        <ScrollView style={ styles.scrollView }>
          {this._listTodos(realm)}
        </ScrollView>
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
    paddingTop: 64,
  },
  ScrollView: {
    flex: 1,
  },
});

