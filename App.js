import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const TopPage = ({ navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      navigation.navigate('TopPage');
    }}
  >
    <Text style={styles.welcome}>Welcome to React Native!</Text>
  </TouchableOpacity>
);

const Nav = StackNavigator({
  TopPage: { screen: TopPage },
});

export default () => <Nav />;
