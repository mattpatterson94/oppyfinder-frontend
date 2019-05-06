import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, FlatList, NavigatorIOS, TabBarIOS } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class DetailsScreen extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      loaded: false,
      place: {},
      selectedTab: 'details'
    };
  }

  componentDidMount() {
    axios.get(`https://api.oppyfinder.com/api/latest/places/${this.props.id}?token=d41d8cd98f00b204e9800998ecf8427e`)
      .then(res => {
        const place = res.data.data;
        this.setState({ place: place, loaded: true });
      });
  }

  render() {
    const { loaded, place, selectedTab } = this.state;
    if (loaded) {
      return (
        <View style={styles.wrapper}>
          <TabBarIOS
            barTintColor='brown'
            barStyle='default'
            itemPositioning='auto'
          >
            <TabBarIOS.Item
              title='Foo'
              systemIcon='bookmarks'
              selected={selectedTab === 'details'}
              onPress={() => { this.setState({ selectedTab: 'details' })}}
              style={{flex: 1}}
            >
              <DetailsInfo place={place.attributes}/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title='Bar'
              systemIcon='more'
              onPress={() => { this.setState({ selectedTab: 'location' })}}
              selected={selectedTab === 'location'}
              style={{flex: 1}}
            >
              <DetailsLocation />
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
      );
    } else {
      return (
        <View style={styles.wrapper}>
          <Text>
            Loading store data...
          </Text>
        </View>
      );
    }
  }
}

class DetailsInfo extends React.Component {
  render() {
    const place = this.props.place;

    return(
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>{place.name}</Text>
        <Text style={styles.tabText}>{place['details']['formatted-address']}</Text>
        <Text style={styles.tabText}>{place['details']['opening-hours']['weekday-text'].join(',')}</Text>
        <Text style={styles.tabText}>Number of Reviews: { place['details']['reviews'].length}</Text>
      </View>
    );
  }
}


class DetailsLocation extends React.Component {
  render() {
    return(
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Location Tab Content</Text>
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
