import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SubHeader from '../Components/SubHeader'
import Category from '../Components/Category'
import Carousel from '../Components/Carousel'
import Services from '../Components/Services'
import Deals from '../Components/Deals'
import Brands from '../Components/Brands'
// import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SubHeader />
      <Category />
        <Carousel />
        <Services />
        <Deals/>
        <Brands/>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  
})