import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.welcome}>Screen 1</Text>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} >
          {/* <Text style={styles.welcome}>Open Drawer</Text> */}
          <Icon name="ios-menu" color="#000" size={30} />
        </TouchableOpacity>
      </View>
    );
  }
}

export class App1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.welcome}>Screen 2</Text>
      </View>
    );
  }
}

export class App2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen 3</Text>
      </View>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <View style={{}}>
        <Text style={styles.welcome}>this is header</Text>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
