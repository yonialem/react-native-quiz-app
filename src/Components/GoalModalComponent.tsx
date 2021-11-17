import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import WideBbuttonComponent from "./WideBbuttonComponent";
import Transport from "../Transport";

export default function GoalModalComponent(props) {

    const [loading, setLoading] = useState(false);
    const [goal, setGoal] = useState(5)

    const setGOAL = () => {
        setLoading(true)
        Transport.HTTP.setGoal({
            "questionLimit": goal,
            "estimatedTime": "12/12/2022"
        })
            .then(response=>{
                setLoading(false)
                Alert.alert("Success","Goal set successfully !",
                    [
                        { text: "OK", onPress: () => props.setShowModal(false) }
                    ]
                    )
            })
            .catch(error=>{
                setLoading(false)
                Alert.alert("Error","Network Error Please try again.")
            })

    }

  return (
      <View style={{position:"absolute",height:"110%", width:"100%", backgroundColor:"#000000b0", zIndex:100, alignItems:"center", justifyContent:"center"}}>
          <View style={{height:"65%", width:"90%", backgroundColor:"#fff", borderRadius:12, padding:20}}>

              <Text style={{color:"#000", fontSize:19, marginTop:10, marginBottom:20, fontWeight:"700"}}>
                  {"How many Questions do you want to answer each day ?"}
              </Text>

              <Text style={{color:"#919191", fontSize:16, marginTop:10, marginBottom:50}}>
                  {"Set reasonable goal today. You can adjust the number anytime in your profile."}
              </Text>

              <TextInput
                  onChangeText={(text => setGoal(parseInt(text)))}
                  value={goal.toString()}
                  style={{width:"100%", borderBottomWidth:.7, borderBottomColor:"#787A7D", fontSize:25, lineHeight:30, textAlign:"center", fontWeight:"700", paddingBottom:5}}
              />

              <View style={{width:"100%", marginVertical:30, flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>

                  <TouchableOpacity
                      onPress={()=>{
                          if(goal > 5){
                              setGoal(goal-1)
                          }
                      }}
                      style={{alignItems:"center", justifyContent:"center", backgroundColor:"#772E86", height:50, width:80, borderRadius:30}}>
                      <Text style={{color:"#fff", fontWeight:"700", fontSize:30}}>
                          {"-"}
                      </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                      onPress={()=>{
                              setGoal(goal+1)

                      }}
                      style={{alignItems:"center", justifyContent:"center", backgroundColor:"#772E86", height:50, width:80, borderRadius:30}}>
                      <Text style={{color:"#fff", fontWeight:"700", fontSize:30}}>
                          {"+"}
                      </Text>
                  </TouchableOpacity>

              </View>

              <Text style={{color:"#000", fontSize:16, marginVertical:20,  textAlign:"center"}}>
                  {"Estimated Hour per day: 1hr"}
              </Text>


              <WideBbuttonComponent
                  loading={loading}
                  onPress={()=>{
                      setGOAL();
                  }}
                  lable={"Save"}
              />




          </View>

      </View>

  );
}


