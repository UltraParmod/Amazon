        <TouchableOpacity />
        import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import recommend from '../assets/recommend.jpg'

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you </Text>
      <Image source={recommend} style={styles.imgStyle}/>
      <View style={styles.bottomSection}>
      <View style={styles.row}>
      <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>18% off</Text>
        </TouchableOpacity>
        <Text style={styles.deal}>Deal</Text>
      </View>
      <View style={styles.row}>
      <Text style={styles.discountPrice}>₹ 1549.00</Text>
      <Text style={styles.mrp}>M.R.P</Text>
      <Text style={styles.achulprice}>₹ 1895.00</Text>
      </View>
      <Text style={styles.productsName}>Nykaa Face Wash Gentle Skin Cleanser for all Skin type</Text>
      <Text style={styles.allDeals}>See all deals</Text>

        
      </View>
    </View>
  )
}

export default Deals

const styles = StyleSheet.create({
    container:{
        marginTop:moderateScale(20),
    },
    title:{
        fontSize:scale(18),
        fontWeight:'700',
        color:'#000',
        paddingHorizontal:moderateScale(10)
    },
    imgStyle:{
        height:scale(200),
        width:'100%',
        marginVertical:moderateScale(10)
    },bottomSection:{
        paddingHorizontal:moderateScale(10)
    },
    offDealBtn:{
        backgroundColor:'#be0201',
        width:scale(60),
        alignItems:'center',
        padding:moderateScale(5),
        borderRadius:moderateScale(3)
    },offDeal:{
        color:'#fff',
        fontSize:scale(12),
    },
    deal:{
        color:'#be0201',
        fontWeight:'700',
        marginLeft:moderateScale(6),
        fontSize:scale(12)
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    discountPrice:{
        color:'#000',
        fontSize:scale(16),
        marginVertical:moderateScale(5)
    },
    mrp:{
        fontSize:scale(10),
        marginHorizontal:moderateScale(5)
    },
    achulprice:{
        fontSize:scale(10),
        textDecorationLine:'line-through'
    },
    productsName:{
            color:'#000',
            fontSize:scale(14),
    },
    allDeals:{
        color:'#017185',
        fontSize:scale(14),
        marginVertical:moderateScale(10)
    }
})