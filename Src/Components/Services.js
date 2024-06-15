import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import AmazonPay from '../assets/amazon-pay.png';
import Sendmoney from '../assets/send-money.jpg';
import payBills from '../assets/pay-bills.jpeg';
import ScanQR from '../assets/scan-qr.jpeg';
import service from '../assets/service1.jpeg'
import { RecentSearchData } from '../data/RecentSearchData';
// import {RecentSearchData} from '../data/RecentSearchData'




const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingRight:moderateScale(20)}}
      style={styles.container}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={Sendmoney} style={styles.imgStyle} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.imgStyle} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={payBills} style={styles.imgStyle} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>



        {RecentSearchData.map(item =>(
      <View key={item.id} style={styles.outerContainer}>
        <Text style={styles.recentSearch}>{item.title}</Text>
        <Image source={item.image} style={styles.serviceimg}/>
      </View>
        ))}

       
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
    container:{
            marginTop:moderateScale(-20),
            paddingHorizontal:moderateScale(10)
    },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(5),
    elevation: 5,
  },
  imgStyle: {
    width: scale(50),
    height: scale(50),
    borderRadius: moderateScale(50),
  },
  innerContainer: {
    padding: moderateScale(10),
    alignItems: 'center',
    paddingTop: moderateScale(15),
  },
  title: {
    fontSize: scale(10),
    color: '#000',
    marginTop:moderateScale(2)
  },
  serviceimg:{
    width:'100%',
    height:scale(130)
  },
  outerContainer:{
    backgroundColor:'#fff',
    marginLeft:moderateScale(5),
    borderRadius:moderateScale(5),
    elevation:5,
    padding:moderateScale(5),
    width:scale(140)
  },recentSearch:{
    fontSize:scale(13),
    color:'#000',
    marginBottom:moderateScale(6),
  }
});
