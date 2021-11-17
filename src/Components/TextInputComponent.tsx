import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function TextInputComponent(props) {
  return (
      <View style={{marginBottom:10}}>

          <Text style={{color:"#787A7D", fontSize:15, marginTop:10}}>
              {props.lable}
          </Text>

          <TextInput
              value={props.value}
              secureTextEntry={props.isPassword}
              onChangeText={(text)=>{ props.onChangeText(text) }}
              style={{width:"100%", borderBottomWidth:.7, borderBottomColor:"#787A7D", fontSize:18, lineHeight:20}}
          />

      </View>
  );
}


