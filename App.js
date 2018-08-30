import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

let count = 1;

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
      count += 1;
      navigation.navigate('TopPage');
    }}
  >
    <Text>{count}</Text>
  </TouchableOpacity>
);

const Nav = StackNavigator({
  TopPage: { screen: TopPage },
});

export default () => <Nav />;
