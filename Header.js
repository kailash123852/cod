import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.textStyle}>Learn Debugging</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle : {
    textAlign:"center",
    fontSize:25,
    color:"white",
    borderColor:"purple",
    backgroundColor:"purple",
    fontFamily:"Chalkduster",
    
  }
})