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
        <ListItem title={title1} />
        <ListItem title={title2} />
        <TouchableOpacity onPress={() => { this.props.navigator.push(sceneA) }}>
          <ListItem title={title3} />
        </TouchableOpacity>
      </View>
    );
  }

  _showImages(realm) {
      return realm.objects('Dog').map((dog, i) =>
      <Image
        key={i}
        style={{width: 50, height: 50, backgroundColor : '#eee'}}
        source={{
            isStatic: true,
            uri: 'data:image/jpeg;base64,'+ dog.name,
          }}
        />)
 }

}

const sceneA = { title: 'my new scene!', id: 'IMAGE_ITEM', filepath: 'some-img-path.jpg' }
const title1 = 'Soon to be an awesome list with photos 1'
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

