import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function CategoryButton(props) {
  return (
      <TouchableOpacity
          onPress={()=>{props.onPress()}}
          style={{height:100, width:"48%", backgroundColor:"#772E86", borderRadius:15, marginBottom:20}}>
          <View style={{height:"50%", width:"100%", backgroundColor:"#fff", borderTopLeftRadius:15, borderTopRightRadius:15, justifyContent:"center"}}>
              <Text style={{color:"#000", fontSize:17, marginLeft:15}}>
                  {props.detail.title}
              </Text>
          </View>
          <Text style={{color:"#fff", fontSize:15, margin:15}}>
              {props.count+" Items"}
          </Text>
      </TouchableOpacity>
  );
}


