import React, { Component } from 'react';
import {
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';
import Realm from 'realm';

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>
   {
     if (route.id != 'IMAGE_LIST') {
       return (
       <TouchableHighlight onPress={() => navigator.pop()}>
         <Text>Back</Text>
       </TouchableHighlight>
       );
     }
   },
  RightButton: (route, navigator, index, navState) =>
    {
      if (route.id === 'IMAGE_LIST') {
        return (
         <TouchableHighlight onPress={() => navigator.push(photoScene)}>
           <Text>+Photo</Text>
         </TouchableHighlight>
        );
      } else if (route.id === 'IMAGE_ITEM') {
        return (
          <TouchableHighlight onPress={() => {
            let realm = new Realm({
              schema: [{name: 'Todo', properties: {imageString: 'string'}}]
            });
            realm.write(() => {
              realm.delete(route.todo);
            });

            navigator.pop()}
          }>
            <Text>+Delete</Text>
          </TouchableHighlight>
        )
      }
    },
  Title: (route, navigator, index, navState) =>
    { return (<Text>{route.title}</Text>); },
};

const photoScene = { title: 'taking a photo!', id: 'TAKE_PHOTO' }

export default (
  <Navigator.NavigationBar
    style={{ backgroundColor: 'gray' }}
    routeMapper={ NavigationBarRouteMapper } />
);

