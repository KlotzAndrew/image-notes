import React, { Component } from 'react';
import ImageList from './ImageList'
import ListItem from './ListItem'
import CameraScreen from './CameraScreen'
import NavigationBar from './NavigationBar'
import AddNote from './AddNote'
import {
  StyleSheet,
  StatusBar,
  View,
  Navigator,
  Text,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

export default class Root extends Component {
  renderScene(route, navigator) {
    if (route.id === 'IMAGE_LIST') {
      return <ImageList navigator={ navigator } />
    } else if (route.id == 'IMAGE_ITEM') {
      var {height, width} = Dimensions.get('window');
      return (
        <View style={styles.container}>
          <Image
            style={{height: height, width: width}}
            source={{
              isStatic: true,
              uri: route.todo.path,
            }}
          />
        </View>
      )
    } else if (route.id == 'TAKE_PHOTO') {
     return (<CameraScreen navigator={ navigator }/>)
    } else if (route.id == 'ADD_NOTE') {
      console.log('route id', route.id)
      console.log('route path', route.path)
      return (
        <AddNote
          navigator={ navigator }
          path={ route.path }
        />
      )
    }
  }

  render() {
    return (
      <Navigator style={ styles.navBar }
        initialRoute={ initialRoute }
        renderScene={ this.renderScene }
        navigationBar={ NavigationBar }
      />
    );
  }
}

const initialRoute = { id: 'IMAGE_LIST', title: 'TODO List' }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 1,
    backgroundColor: '#eee',
  },
  navBar: {
    flex: 1,
  },
});

