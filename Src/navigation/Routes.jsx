import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import ProductsScreen from '../Screens/ProductsScreen';




const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})