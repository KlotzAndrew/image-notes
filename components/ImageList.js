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
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    });

    return (
      <View style={styles.container}>
        <Text>count todos: {realm.objects('Dog').length}</Text>
        {this._showImages(realm)}
      </View>
    );
  }

  _showImages(realm) {
    return realm.objects('Dog').map((dog, i) =>
      <ListItem
        key={i}
        name={dog.name}
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

