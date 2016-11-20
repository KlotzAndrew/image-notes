import React, { Component } from 'react';
import ImageList from './ImageList'
import ListItem from './ListItem'
import CameraScreen from './CameraScreen'
import NavigationBar from './NavigationBar'
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
            uri: route.todo.imageString,
          }}
        />
      </View>
      )
    } else if (route.id == 'TAKE_PHOTO') {
     return (<CameraScreen navigator={ navigator }/>)
    }
  }

  render() {
    return (
      <Navigator style={{ flex: 1 }}
        initialRoute={{ id: 'IMAGE_LIST', title: 'TODO List' }}
        renderScene={ this.renderScene }
        navigationBar={ NavigationBar }
      />
    );
  }
}

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
});

