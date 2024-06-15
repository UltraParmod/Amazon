import {Image, StyleSheet, Text, View,ScrollView,lenght} from 'react-native';
import React,{useState,useEffect} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import prod1 from '../assets/prod1.png';
import primelogo from '../assets/prime-logo.png';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {getProductFromApi, getRating,getImgUrl} from '../utils/helper';
import { ProductData } from '../data/ProjuctsData';


const ProductsScreen = () => {
  // const [product, setProduct] = useState();

  // useEffect(()=>{
  //   getProductFromApi(setProduct);
  // },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductsScreen</Text>
      <Text style={styles.tagline}>
        Price and other details may vary based on Product asize{' '}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        
      {
        ProductData.map(item=>(
      <View style={styles.productsSection}>
        <View style={styles.productsImgSection}>
          <Image source={item.image} style={styles.productsImg} />
        </View>
        <View style={styles.productsDetailsSection}>
          <Text style={styles.Sponsered}>Sponsered</Text>
          <Text style={styles.ProductsName}>
           {item.productName}
          </Text>
          <View style={styles.row}>
            <Text style={styles.rating}>{item.rating} </Text>
            {/* <FontAwesome  name='star' size={moderateScale(10)} color='#ffa41c' /> */}
            {getRating(item.rating)}
            <Text style={styles.ratingCount}> {item.ratingCount}</Text>
          </View>
          <View style={styles.row}>
          <Text style={styles.price}>₹ {item.price}</Text>
          <Text style={styles.mrp}>M.R.P</Text>
          <Text style={styles.cross}>₹ {item.crossOutText}</Text>
          </View>
          <Text style={styles.offer}>Up to 5% cashback with Amazon Pay Credit Card</Text>
      <Image source={primelogo} style={styles.primelogo}/>
      <Text style={styles.offer}>{item.deliveryBy} </Text>

        </View>
      </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
  },
  title: {
    fontSize: scale(18),
    fontWeight: '700',
    color: '#000',
  },
  tagline: {
    fontSize: scale(11),
    color: 'grey',
  },
  productsSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: moderateScale(15),
  },
  productsImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productsDetailsSection: {
    width: '60%',
    padding: moderateScale(10),
  },
  productsImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  Sponsered: {
    fontSize: scale(11),
    color: 'grey',
    marginBottom: moderateScale(5),
  },
  ProductsName: {
    fontSize: scale(12),
    color: '#000',
    lineHeight: scale(18),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: scale(12),
    color: '#017185',
  },
  ratingCount:{
    fontSize: scale(12),
    color: '#017185',
  },
  price:{
    fontSize: scale(16),
    color: '#000',
  },
  mrp:{
    fontSize: scale(10),
    color: 'gray',
    marginHorizontal:moderateScale(2)
  },
  cross:{
    fontSize: scale(10),
    textDecorationLine:'line-through'
  },
  offer:{
    fontSize: scale(10),
    marginVertical:moderateScale(2)
  },
  primelogo:{
    height:moderateScale(16),
    width:scale(50)
  }
});
