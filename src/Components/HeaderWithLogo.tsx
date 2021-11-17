import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export default function HeaderWithLogo(props) {
  return (
      <View style={{height:54, width:"100%", flexDirection:"row", alignItems:"center", paddingHorizontal:15, justifyContent:"space-between", backgroundColor:"#fff"}}>
          <Image source={require('../../assets/home.jpeg')} style={{height:50, width:50}} resizeMode={"contain"}/>
          <Text
              style={{color:"#000", fontSize:18}}
          >
              {props.lable}
          </Text>

          <View style={{alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
              <Ionicons name="notifications" color={"#000"} size={22}/>
              <Ionicons name="mail" color={"#000"} size={22} style={{marginLeft:15}}/>
          </View>
      </View>

  );
}


