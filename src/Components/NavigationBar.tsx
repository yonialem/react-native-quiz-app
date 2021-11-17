import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export default function NavigationBar(props) {
    const [selectedTab, setSelectedTab] = useState(1);
  return (
      <View style={{position:"absolute", bottom:0, height:55, width:"100%", flexDirection:"row", alignItems:"center", paddingHorizontal:15, justifyContent:"space-around", backgroundColor:"#fff"}}>

          <TouchableOpacity
              onPress={()=>{setSelectedTab(1); props.navigation.navigate("practiceStack")}}
              style={{height:"100%", width:80, alignItems:"center", justifyContent:"center"}}>
              <Ionicons name={"bulb"} color={selectedTab===1 ? "#EF9135" : "#707881"} size={18}/>
              <Text style={{color: selectedTab===1 ? "#772E86" : "#707881", fontSize:12}}>
                  {"Practice"}
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={()=>{setSelectedTab(2); props.navigation.navigate("libraryStack")}}
              style={{height:"100%", width:80, alignItems:"center", justifyContent:"center"}}>
              <Ionicons name={"ios-library-outline"} color={selectedTab===2 ? "#EF9135" : "#707881"} size={18}/>
              <Text style={{color:selectedTab===2 ? "#772E86" : "#707881", fontSize:12}}>
                  {"Library"}
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={()=>{setSelectedTab(3); props.navigation.navigate("performanceStack")}}
              style={{height:"100%", width:80, alignItems:"center", justifyContent:"center"}}>
              <Ionicons name={"bar-chart-outline"} color={selectedTab===3 ? "#EF9135" : "#707881"} size={18}/>
              <Text style={{color:selectedTab===3 ? "#772E86" : "#707881", fontSize:12}}>
                  {"Performance"}
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={()=>{setSelectedTab(4); props.navigation.navigate("profileStack")}}
              style={{height:"100%", width:80, alignItems:"center", justifyContent:"center"}}>
              <Ionicons name={"person-circle"} color={selectedTab===4 ? "#EF9135" : "#707881"} size={18}/>
              <Text style={{color:selectedTab===4 ? "#772E86" : "#707881", fontSize:12}}>
                  {"Profile"}
              </Text>
          </TouchableOpacity>
      </View>

  );
}


