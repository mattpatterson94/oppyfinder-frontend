import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, NavigatorIOS, TabBarIOS } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: HomeScreen,
          title: 'Home',
          passProps: {index: 1},
        }}
        style={styles.container}
      />
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    backgroundColor: 'green',
  },
  tabText: {
    color: 'pink',
    margin: 50,
  },
  wrapper: {
    flex: 1,
    marginTop: 64,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
