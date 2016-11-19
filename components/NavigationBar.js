import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Realm from 'realm';
import colors from '../assets/colorConstants'
import schema from '../db/schema'

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>
   {
     if (route.id != 'IMAGE_LIST') {
       return (
       <TouchableHighlight 
         style={styles.navBarLeftButton}
         onPress={() => navigator.pop()}>
         <Text style={styles.navBarText}>
           Back
         </Text>
       </TouchableHighlight>
       );
     }
   },
  RightButton: (route, navigator, index, navState) =>
    {
      if (route.id === 'IMAGE_LIST') {
        return (
         <TouchableHighlight onPress={() => navigator.push(photoScene)}>
            <Text style={styles.navBarText}>
              Photo
            </Text>
         </TouchableHighlight>
        );
      } else if (route.id === 'IMAGE_ITEM') {
        return (
          <TouchableHighlight onPress={() => {
            let realm = new Realm({
              schema: [schema.todo]
            });
            realm.write(() => {
              realm.delete(route.todo);
            });

            navigator.pop()}
          }>
            <Text style={styles.navBarText}>
              Delete
            </Text>
          </TouchableHighlight>
        )
      }
    },
  Title: (route, navigator, index, navState) => {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },
};

const photoScene = { title: 'taking a photo!', id: 'TAKE_PHOTO' }

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.blue,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: colors.white,
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
});

export default (
  <Navigator.NavigationBar
    style={ styles.navBar }
    routeMapper={ NavigationBarRouteMapper } />
);

