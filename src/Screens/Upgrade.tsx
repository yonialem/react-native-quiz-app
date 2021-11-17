import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
export default function Upgrade(props) {
  return (
      <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#fff", height:"100%"}}>

        <StatusBar hidden={false} />

        <View style={{height:54, width:"100%", flexDirection:"row", alignItems:"center", paddingHorizontal:15, backgroundColor:"#fff"}}>
          <Ionicons
              onPress={()=>{props.navigation.goBack()}}
              name={"chevron-back"} size={23} color={"#000"}/><Text
              style={{color:"#000", fontSize:18, marginLeft:10}}
          >
            {"Upgrade your Account"}
          </Text>
        </View>

        <View style={{width:"100%", height:"100%", padding:20}}>

          <View style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
            <View style={{height:30, width:30, borderRadius:15, backgroundColor:"#E3E3E3", alignItems:"center", justifyContent:"center", marginRight:8}}>
              <Ionicons name={"ios-checkmark-sharp"} color={"#772E86"} size={22}/>
            </View>
            <Text style={{color:"#000", fontSize:16}}>
              {"You wont be charged if canceled in 3 days."}
            </Text>
          </View>

          <View style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
            <View style={{height:30, width:30, borderRadius:15, backgroundColor:"#E3E3E3", alignItems:"center", justifyContent:"center", marginRight:8}}>
              <Ionicons name={"ios-checkmark-sharp"} color={"#772E86"} size={22}/>
            </View>
            <Text style={{color:"#000", fontSize:16}}>
              {"550+ Questions."}
            </Text>
          </View>

          <View style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
            <View style={{height:30, width:30, borderRadius:15, backgroundColor:"#E3E3E3", alignItems:"center", justifyContent:"center", marginRight:8}}>
              <Ionicons name={"ios-checkmark-sharp"} color={"#772E86"} size={22}/>
            </View>
            <Text style={{color:"#000", fontSize:16}}>
              {"5x Content of Text Book, 1/5 Price."}
            </Text>
          </View>

          <Text style={{color:"#707881", fontSize:14, marginTop:10, marginBottom:30, textAlign:"justify"}}>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "}
          </Text>

          <TouchableOpacity style={{height:60, width:"100%", flexDirection:"row", borderWidth:1.5, borderColor:"#772E86", borderRadius:15, marginBottom:15, alignItems:"center", paddingHorizontal:20}}>
            <Ionicons name={"checkmark-circle-sharp"} color={"#772E86"} size={30}/>

            <Text style={{fontSize:18, fontWeight:"700", marginLeft:20}}>
              {"$22.99 / Month"}
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={{height:60, width:"100%", flexDirection:"row", borderWidth:1.5, borderColor:"#CCCCCC", borderRadius:15, marginBottom:15, alignItems:"center", paddingHorizontal:20}}>
            <Ionicons name={"checkmark-circle-sharp"} color={"#CCCCCC"} size={30}/>

            <Text style={{fontSize:18, fontWeight:"700", marginLeft:20}}>
              {"$60.99 / 6 Month"}
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={{height:60, width:"100%", flexDirection:"row", borderWidth:1.5, borderColor:"#CCCCCC", borderRadius:15, marginBottom:30, alignItems:"center", paddingHorizontal:20}}>
            <Ionicons name={"checkmark-circle-sharp"} color={"#CCCCCC"} size={30}/>

            <Text style={{fontSize:18, fontWeight:"700", marginLeft:20}}>
              {"99.99 / Year"}
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
              onPress={()=>{props.navigation.goBack()}}
              style={{height:55, width:"100%", backgroundColor:"#7B2E86", borderRadius:30, alignItems:"center", justifyContent:"center"}}
          >
            <Text style={{color:"#fff", fontSize:18, fontWeight:"700"}}>
              {"Buy Now"}
            </Text>

          </TouchableOpacity>


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
