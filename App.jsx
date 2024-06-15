import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Routes from './Src/navigation/Routes'

const App = () => {
  return (
   <View style={{flex:1}}>
<Routes />
   </View>
  )
}

export default App

const styles = StyleSheet.create({})



