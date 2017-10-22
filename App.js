import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { List, ListItem } from 'react-native-elements';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

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

  render() {
    return (
      <View style={styles.container}>
        <List>
          <FlatList
            keyExtractor={item => item.id}
            data={this.state.places}
            renderItem={
              ({item}) => (
                <ListItem title={item.attributes.name} />
              )
            }
          />
        </List>
      </View>
    );
  }
}


constructor(props) {
  super(props)

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

render() {
});

export default App = StackNavigator({
  Home: { screen: HomeScreen }
})


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
