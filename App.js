/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, StatusBar} from "react-native";
import Header from "./Header"

function Footer(){
  var nama="@Niomic-test"
  return(
    <View>
      <Text>Ini adalah Footer</Text>
      <Text>{nama}</Text>
    </View>
    )
}

export default class app extends Component<props>{
  render(){
    return(
      <View>
        <StatusBar backgroundColor='blue'/>
        <Text>Hello World</Text>
        <Header/>
        <Footer/>
      </View>
      )
  };
};
