import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Transport from "../Transport";
export default function Topics(props) {

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getQuestions = () => {
      Transport.HTTP.getBooks(props.route.params.item.id)
          .then(response=>{
            setTopics(response.data.data)
            setLoading(false)

          })
          .catch(error=>{
            setLoading(false)
            alert(error)
          })
    }

    getQuestions();
  })

  return (
    <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#F0F1F3", height:"100%"}}>

      <StatusBar hidden={false} />

      <View style={{height:54, width:"100%", flexDirection:"row", alignItems:"center", paddingHorizontal:15, backgroundColor:"#fff"}}>
        <Ionicons
            onPress={()=>{props.navigation.goBack()}}
            name={"chevron-back"} size={23} color={"#000"}/><Text
          style={{color:"#000", fontSize:18, marginLeft:10}}
      >
        {"Exam Topics"}
      </Text>
      </View>

      <View style={{width:"100%", height:"100%", padding:15}}>

        <View style={{width:"100%", marginTop:10}}>

          {
            loading ?
                <ActivityIndicator
                    size={"large"}
                    color={"#C83187"}
                    style={{marginTop:15}}
                /> :
                topics.length === 0 ?
                    <Text style={{color:"#919191", fontSize:16, marginTop:10, marginBottom:20, textAlign:"center"}}>
                      {"No Books found"}
                    </Text>
                    :
                topics.map(topic=>
                    <TouchableOpacity
                        onPress={()=>{props.navigation.navigate("Explanation")}}
                        style={{height:50, width:"100%", borderRadius:15, flexDirection:"row", paddingHorizontal:15, alignItems:"center", backgroundColor:"#fff", marginBottom:10}}>

                      <Text style={{color:"#000", fontSize:16}}>
                        {topic.title}
                      </Text>

                    </TouchableOpacity>
                )
          }



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
