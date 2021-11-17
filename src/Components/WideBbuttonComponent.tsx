import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function WideBbuttonComponent(props) {
  return (
      <TouchableOpacity
          disabled={props.loading}
          onPress={()=>{props.onPress()}}
          style={{height:55, width:"100%", backgroundColor:"#C83187", borderRadius:30, alignItems:"center", justifyContent:"center", marginTop:30}}
      >
          <Text style={{color:"#fff", fontSize:18, fontWeight:"700"}}>
              {props.lable}
          </Text>

          {
              props.loading &&
              <ActivityIndicator color={"#fff"} size={"large"} style={{position:"absolute", right:10, alignSelf:"center"}}/>
          }

      </TouchableOpacity>
  );
}


