import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';

import {moderateScale,scale} from 'react-native-size-matters';

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}>
        <View style={styles.inputBox}>
        <View style={styles.row}>

          <Ionicons name="search" size={moderateScale(22)} color="#1f1f1f" />
          <TextInput placeholder="Search Amazon.in" placeholderTextColor={'#848484'}
            style={styles.textInput}
          />
        </View>
          <AntDesign name="scan1" size={moderateScale(22)} color="#909594" />
        </View>
        <Feather name="mic" size={moderateScale(22)} color="#000000" />
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding:moderateScale(10),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  inputBox:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#a1bcc0',
    borderRadius:moderateScale(8),
    backgroundColor:'#fff',
    width:'90%',
    justifyContent:'space-between',
    paddingHorizontal:moderateScale(10),
    elevation:moderateScale(5)
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  textInput:{
    padding:moderateScale(8)
  }
});
