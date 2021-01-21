import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ReadingListScreen from './ReadingListScreen';
import LoginScreen from "./LoginScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createStackNavigator()
const Root = () => {
  return (
    <Stack.Navigator
      initialRouteName={"LoginScreen"}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"ReadingListScreen"} component={ReadingListScreen} />
      <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
      <Stack.Screen name={"DetailsScreen"} component={DetailsScreen} />
    </Stack.Navigator>
  )
}

const Route = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  )
}
export default Route
