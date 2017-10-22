import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, NavigatorIOS, TabBarIOS } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import DetailsScreen from '../DetailsScreen';

export default class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      places: []
    };
  }

  _keyExtractor = (item, index) => {item.id};

  componentDidMount() {
    axios.get(`http://api.oppyfinder.com/api/latest/places?token=d41d8cd98f00b204e9800998ecf8427e`)
      .then(res => {
        const places = res.data.data;
        this.setState({ places });
      });
  }


  _onForward = (id) => {
    this.props.navigator.push({
      component: DetailsScreen,
      title: 'Details',
      passProps: {id: id}
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            keyExtractor={item => item.id}
            data={this.state.places}
            renderItem={
              ({item}) => (
                <ListItem
                  onPress={() => this._onForward(item.id)}
                  title={item.attributes.name}
              />
              )
            }
          />
        </List>
      </View>
    );
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
