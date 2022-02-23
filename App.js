import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from "./screens/HomeScreen"
import GoScreen from "./screens/GoScreen"

import {createSwitchNavigator,createAppContainer} from "react-navigation"

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer></AppContainer>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  GoScreen : GoScreen
  
})

const AppContainer = createAppContainer(AppNavigator)

