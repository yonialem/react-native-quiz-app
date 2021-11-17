import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Transport from "../Transport";
import WideBbuttonComponent from "../Components/WideBbuttonComponent";
import * as SecureStore from "expo-secure-store";
export default function Profile(props) {

  const [userDetails, setUserDetails] = useState(0);
  const [goals, setGoals] = useState(0);
  const [loading, setLoading] = useState(true);

  const getValueFor = async (k) => {
    let result = await SecureStore.getItemAsync(k);
    if (result) {
      setUserDetails(JSON.parse(result))

    } else {

    }
  }


  useEffect(() => {
    const getQuestions = () => {
      Transport.HTTP.getGoal()
          .then(response=>{
            setGoals(response.data.data.questionLimit)
            setLoading(false)

          })
          .catch(error=>{
            setLoading(false)
            alert(error)
          })
    }

    getQuestions();
    getValueFor("USER_DETAILS")
  })

  return (
    <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#F0F1F3", height:"100%"}}>

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

        <View style={{height:130, width:"100%", backgroundColor:"#fff", marginVertical:10, borderRadius:15, padding:15, flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>

          <Image source={require('../../assets/profilre_pic.png')} style={{height:100, width:100, borderRadius:10, marginRight:30}} resizeMode={"cover"}/>

          <View style={{alignItems:"flex-start", justifyContent:"flex-start"}}>
            <Text style={{color:"#000", fontSize:15, marginBottom:5}}>
            {userDetails.fullName}
            </Text>
            <Text style={{color:"#969696", fontSize:15, marginBottom:5}}>
            {userDetails.email}
            </Text>
            <Text style={{color:"#969696", fontSize:15, marginBottom:5}}>
            {"Basic Account"}
            </Text>
            <TouchableOpacity
                onPress={()=>{props.navigation.navigate("Upgrade")}}
                style={{height:30, width:"100%", backgroundColor:"#772E86", borderRadius:30, alignItems:"center", justifyContent:"center", marginTop:0}}
            >
              <Text style={{color:"#fff", fontSize:14, fontWeight:"700"}}>
                {"Upgrade"}
              </Text>

            </TouchableOpacity>
          </View>

        </View>

        <View style={{width:"100%", marginTop:20}}>

          <TouchableOpacity style={{height:50, width:"100%", borderRadius:15, flexDirection:"row", paddingHorizontal:15, alignItems:"center", backgroundColor:"#fff", justifyContent:"space-between", marginBottom:15}}>

            <Text style={{color:"#000", fontSize:16}}>
              {"Daily Goal"}
            </Text>

            <Text style={{color:"#000", fontSize:14, fontWeight:"700"}}>
              {"30"}
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={{height:50, width:"100%", borderRadius:15, flexDirection:"row", paddingHorizontal:15, alignItems:"center", backgroundColor:"#fff", justifyContent:"space-between", marginBottom:15}}>

            <Text style={{color:"#000", fontSize:14}}>
              {"Journey"}
            </Text>

            <Text style={{color:"#000", fontSize:16, fontWeight:"700"}}>
              {"Real Estate"}
            </Text>

          </TouchableOpacity>

          <TouchableOpacity style={{height:50, width:"100%", borderRadius:15, flexDirection:"row", paddingHorizontal:15, alignItems:"center", backgroundColor:"#fff", justifyContent:"space-between", marginBottom:15}}>

            <Text style={{color:"#000", fontSize:16}}>
              {"Sync Progress"}
            </Text>

            <Ionicons name={"chevron-forward"} size={23} color={"#000"}/>

          </TouchableOpacity>

          <TouchableOpacity style={{height:50, width:"100%", borderRadius:15, flexDirection:"row", paddingHorizontal:15, alignItems:"center", backgroundColor:"#fff", justifyContent:"space-between", marginBottom:15}}>

            <Text style={{color:"#000", fontSize:16}}>
              {"Favourite Question"}
            </Text>

            <Ionicons name={"chevron-forward"} size={23} color={"#000"}/>

          </TouchableOpacity>

          <WideBbuttonComponent
              lable={"Logout"}
              onPress={async ()=>{
                await SecureStore.deleteItemAsync("USER_DETAILS")
                props.navigation.navigate("authStack")
              }}
          />



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
