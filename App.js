/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/containers/AlbumList'
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          text="Albuns"
        />
        <AlbumList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
