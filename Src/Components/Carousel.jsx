import { StyleSheet, Text, View,Dimensions ,Image,} from 'react-native'
import React,{useRef, useState} from 'react'
// import CarouselSlider,{Pagination} from 'react-native-snap-carousel';
import CarouselSlider, { Pagination,lenght } from 'react-native-snap-carousel';
import { CarouselData } from '../data/CarouselData';

import { moderateScale,scale } from 'react-native-size-matters';


const sliderWidth=Dimensions.get('screen').width;
const Carousel = () => {
  const carouselRef=useRef();
  const [activeSlide, setActiveSlide] = useState(0)

  
  const renderItem = ({item, index}) => {
    return (
        <View style={styles.slideStyle} >
        <Image source={item.image}  style={styles.imgStyle}/>
            {/* <Text style={styles.titleStyle}>{ item.title }</Text> */}
        </View>
    );
}

  return (
    <View style={styles.CarouselContainer}>
      <CarouselSlider
              ref={carouselRef}
              data={CarouselData}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={500}
              onSnapToItem={index=>setActiveSlide(index)}
            />
             <Pagination
              dotsLength={CarouselData.length}
              activeDotIndex={activeSlide}
              containerStyle={{
                position:'absolute',
                bottom:0,
                left:moderateScale('15%')
               }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal:moderateScale(4.5),
              }}
              inactiveDotStyle={{
                width: 15,
                  height: 15,
                  borderRadius: 10,
              }}
              
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              dotColor='green'
              inactiveDotColor='#fff'
            />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  CarouselContainer:{
      position:'relative'
  },
  imgStyle:{
      height:scale(250),
      width:'100%'
  }
})