import React, { Component } from 'react';
import ImageList from './ImageList'
import ListItem from './ListItem'
import {
  StyleSheet,
  StatusBar,
  View,
  Navigator,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Root extends Component {
  renderScene(route, navigator) {
    if (route.id === 'IMAGE_LIST') {
      return <ImageList navigator={ navigator } />
    } else if (route.id == 'IMAGE_ITEM') {
      return (
      <View style={styles.container}>
        <Text>{route.filepath}</Text>
      </View>
      )
    }
  }

  render() {
    return (
      <Navigator style={{ flex: 1 }}
        initialRoute={{ id: 'IMAGE_LIST', title: 'TODO List' }}
        renderScene={ this.renderScene }
        navigationBar={
     <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          {
            if (route.id == 'IMAGE_ITEM') {
              return (
              <TouchableHighlight onPress={() => navigator.pop()}>
                <Text>Back</Text>
              </TouchableHighlight>
              );
            }
          },
         RightButton: (route, navigator, index, navState) =>
           { return (<Text>Done</Text>); },
         Title: (route, navigator, index, navState) =>
           { return (<Text>{route.title}</Text>); },
       }}
       style={{backgroundColor: 'gray'}}
     />
 }
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
});

