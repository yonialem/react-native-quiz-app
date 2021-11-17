import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
export default function Performance(props) {
  return (
    <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#FFFFFF", height:"100%"}}>

      <StatusBar hidden={false} />

      <View style={{height:54, width:"100%", flexDirection:"row", alignItems:"center", paddingHorizontal:15, justifyContent:"space-between", backgroundColor:"#fff"}}>
        <Image source={require('../../assets/home.jpeg')} style={{height:50, width:50}} resizeMode={"contain"}/>
        <Text
            style={{color:"#000", fontSize:18}}
        >
          {"Sunrise Real Estate"}
        </Text>

        <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
          <Ionicons name="notifications" color={"#000"} size={22}/>
          <Ionicons name="mail" color={"#000"} size={22} style={{marginLeft:15}}/>
        </View>
      </View>

      <View style={{width:"100%", height:"100%", padding:15}}>

        <Image source={require('../../assets/asset_1.png')} style={{height:"80%", width:"100%", alignItems:'flex-start'}} resizeMode={"contain"}/>


      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
