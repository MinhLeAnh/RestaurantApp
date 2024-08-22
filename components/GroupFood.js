import React from "react";
import { Text, StyleSheet,Image,View } from "react-native";
const GroupFood = ({imageName,foodName,color,textColor,widthImage,heightImage}) => {
  const imageMap = {
    'pizza': require('../assets/iconPizza.png'),
    'burger': require('../assets/iconBurger.png'),
    'drink': require('../assets/iconDrink.png'),
    'rice': require('../assets/iconRice.png'),
    // Add more images as needed
  };

  return (
    <View style={[styles.container,{backgroundColor:color}]}>
      <Image source={imageMap[imageName]} style={{height:heightImage,width:widthImage}} />
      <Text style={{color:textColor,fontSize:13}}>{foodName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width:82,
    height:96,
    borderRadius:6,
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:21,
    marginRight:14
  }
  
});

export default GroupFood;
