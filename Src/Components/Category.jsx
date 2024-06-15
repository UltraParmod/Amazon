import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import fresh from '../assets/fresh.jpeg'
import {moderateScale,scale} from 'react-native-size-matters';
import { Categorydata } from '../data/Categorydata';
import {useNavigation} from '@react-navigation/native'
// import Carousel from 'react-native-snap-carousel';
// import Carousel, { Pagination } from 'react-native-snap-carousel';


const Category = () => {
  const navigation=useNavigation()
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
    {Categorydata.map(item=>(


    <TouchableOpacity onPress={()=>navigation.navigate('Products')} key={item.id} style={styles.Categoriedata}>
      <Image source={item.image} style={styles.imgStyle}/>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>

    ))}
    </ScrollView>
  )
}

export default Category

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    padding:moderateScale(10),
  },
  imgStyle:{
    width:scale(50),
    height:scale(50),
  },
  title:{
    fontSize:scale(10),
    color:'#2c4341',
  },
  Categoriedata:{
    paddingHorizontal:moderateScale(6),
    alignItems:'center'
  }
})