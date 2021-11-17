import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
export default function Explanation(props) {
  return (
      <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#F0F1F3", height:"100%"}}>

        <StatusBar hidden={false} />

        <View style={{height:54, width:"100%", flexDirection:"row", alignItems:"center", paddingHorizontal:15, backgroundColor:"#fff"}}>
          <Ionicons
              onPress={()=>{props.navigation.goBack()}}
              name={"chevron-back"} size={23} color={"#000"}/><Text
              style={{color:"#000", fontSize:18, marginLeft:10}}
          >
            {"Collecting Taxes"}
          </Text>
        </View>

        <View style={{width:"100%", height:"100%", padding:20}}>

          <Text style={{color:"#000", fontSize:16, marginTop:10, marginBottom:30, textAlign:"justify"}}>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          </Text>

          <Text style={{color:"#000", fontSize:16, fontWeight:"700", marginTop:10, textAlign:"center"}}>
            {"Was this helpful ?"}
          </Text>

            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around", marginTop:25, width:"50%", alignSelf:"center"}}>
                <TouchableOpacity style={{height:55, width:55, borderRadius:55/2, alignItems:"center", justifyContent:"center", backgroundColor:"#772E86"}}>
                    <Ionicons name={"thumbs-up-sharp"} color={"#fff"} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity style={{height:55, width:55, borderRadius:55/2, alignItems:"center", justifyContent:"center", backgroundColor:"#CF3287"}}>
                    <Ionicons name={"thumbs-down-sharp"} color={"#fff"} size={25}/>
                </TouchableOpacity>


            </View>

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
