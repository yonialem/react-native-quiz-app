import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function SubHeader(props) {
  return (
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:15}}>

          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{color:"#000", fontSize:17, fontWeight:"700"}}>
                  {props.lable}
              </Text>
              <View style={{paddingHorizontal:15, paddingVertical:3, backgroundColor:props.count > 0 ? "#EF9135" : "#B0B0B0", borderRadius:13, marginLeft:10}}>
                  <Text style={{color:"#fff", fontSize:15, fontWeight:"700"}}>
                      {props.count}
                  </Text>
              </View>
          </View>

          <Text
              onPress={props.action()}
              style={{color:"#000", fontSize:14, fontWeight:"700"}}>
              {"View All"}
          </Text>

      </View>
  );
}


