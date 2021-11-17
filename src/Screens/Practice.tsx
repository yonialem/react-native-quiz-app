import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  BackHandler,
  Alert, ActivityIndicator
} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import GoalModalComponent from "../Components/GoalModalComponent";
import HeaderWithLogo from "../Components/HeaderWithLogo";
import SubHeader from "../Components/SubHeader";
import CategoryButton from "../Components/CategoryButton";
import Transport from "../Transport";
export default function Practice(props) {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCategories = () => {
      Transport.HTTP.getCategories()
          .then(response=>{
            setLoading(false)
            setCategories(response.data.data);
          })
          .catch(error=>{
            alert(error)
            setLoading(false)
          })
    }
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to close the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    fetchCategories();

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#F0F1F3", height:"100%"}}>

      <StatusBar hidden={false} />

      {
        (showModal) &&
        <GoalModalComponent
            setShowModal={(value)=>{setShowModal(value)}}
        />
      }

      <HeaderWithLogo lable={"Real Estate Practice"}/>

      <ScrollView style={{width:"100%", height:"100%", padding:15, marginBottom:55}}>

        <View style={{height:150, width:"100%", backgroundColor:"#fff", marginVertical:10, borderRadius:15, padding:15}}>

          <Text style={{color:"#787A7D", fontSize:16, fontWeight:"700"}}>
            {"Real Estate Prep"}
          </Text>

          <Text style={{color:"#000", fontSize:15, fontWeight:"700", marginTop:10}}>
            {"SET YOUR DAILY GOAL NOW"}
          </Text>

          <TouchableOpacity
              onPress={()=>{setShowModal(true)}}
              style={{height:40, width:"100%", backgroundColor:"#C83187", borderRadius:30, alignItems:"center", justifyContent:"center", marginTop:20}}
          >
            <Text style={{color:"#fff", fontSize:18, fontWeight:"700"}}>
              {"Let's Go !"}
            </Text>

          </TouchableOpacity>

        </View>

        <SubHeader
            lable={"Questions"}
            count={3+5+7}
            action={()=>{}}
        />

        <View style={{width:"100%", marginVertical:15, flexDirection:"row", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap"}}>
          {
            loading ?
                <ActivityIndicator
                    size={"large"}
                    color={"#C83187"}
                    style={{marginLeft:"45%"}}
                /> :
                categories.length === 0 ?
                    <Text style={{color:"#919191", fontSize:16, marginTop:10, marginBottom:20, textAlign:"center"}}>
                      {"No categories found"}
                    </Text>
                    :
            categories.map((item, index)=>
                <CategoryButton
                    key={item.id}
                    detail={item}
                    title={"The Job"}
                    count={index*2+3}
                    onPress={()=>{props.navigation.navigate("Question",{item})}}
                />
            )
          }
        </View>

        <SubHeader
            lable={"Custom Quizes"}
            count={0}
            action={()=>{}}
        />
        <Text style={{color:"#919191", fontSize:16, marginTop:10, marginBottom:20, textAlign:"center"}}>
          {"You don't have any custom quizzes."}
        </Text>

      </ScrollView>


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
