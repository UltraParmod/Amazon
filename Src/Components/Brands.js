import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import brand1 from '../assets/brand1.jpeg';
import brand2 from '../assets/brand2.jpeg';
import brand3 from '../assets/brand3.jpeg';
import brand4 from '../assets/brand4.jpeg';
import {moderateScale, scale} from 'react-native-size-matters';

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of the day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={brand1} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>Min. 20% off | CaratLane Diamond Neklace</Text>
          </View>
          <View style={styles.brands}>
            <Image source={brand2} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>Min. 40% off | Fosil, Titan Smart Watch & More.</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={brand3} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>Hells - Upto 50% OFF on Heeled Sandals , Hight Heel</Text>
          </View>
          <View style={styles.brands}>
            <Image source={brand4} style={styles.imgStyle} />
            <Text style={styles.brandsTitle}>Sony 60W Blutooth SounBar Speaker Audio Engine</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(10),
    padding: moderateScale(10),
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  imgStyle: {
    height: scale(150),
    width: '100%',
    borderRadius: moderateScale(4),
  },
  title: {
    fontSize: scale(18),
    fontWeight: '700',
    color: '#000',
    padding: moderateScale(10),
  },
  row: {
    flexDirection: 'row',
  },
  brands: {
    width: '50%',
    padding: moderateScale(10),
  },
  brandsTitle:{
    fontSize:scale(12),
    color: '#000',
    marginTop:moderateScale(4)
  }
});
