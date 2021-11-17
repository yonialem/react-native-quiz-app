import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TextInputComponent from "../Components/TextInputComponent";
import WideBbuttonComponent from "../Components/WideBbuttonComponent";
import Transport from "../Transport";
import jwt_decode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

export default function Login(props) {

    // "email": "mekuriya185@gmail.com", "password": "test123"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const save = async (k, v) => {
        await SecureStore.setItemAsync(k, v);
    }


    const login = () => {
        setLoading(true)
        Transport.HTTP.login({ email , password })
            .then(response=>{
                setLoading(false)
                if(response.data.success){
                    let token = response.data.token;
                    var decoded = jwt_decode(token);
                    decoded[token] = token;
                    save("USER_DETAILS", JSON.stringify(decoded))
                    // alert(JSON.stringify(decoded))
                    props.navigation.navigate("tabNavigator")
                }else{
                    Alert.alert("Error","Invalid Email/Password please try again.")
                }
            })
            .catch(error=>{
                setLoading(false);
                Alert.alert("Error","Invalid Email/Password please try again.")
            })
    }

  return (
    <View style={{height:"100%",alignItems:"center", justifyContent:"center", paddingHorizontal:30}}>

      <Image style={{height:150, marginBottom:30}} source={require('../../assets/logo_full.png')} resizeMode={"contain"}/>

      <View style={{width:"100%"}}>

        <Text style={{color:"#1E2226", fontSize:30}}>
          {"Login"}
        </Text>

        <Text style={{color:"#787A7D", fontSize:19, marginTop:10, marginBottom:20}}>
          {"Please login to your account."}
        </Text>

        <TextInputComponent
            value={email}
            onChangeText={(text)=>{setEmail(text)}}
            isPassword={false}
            lable={"Email"}
        />

        <TextInputComponent
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
            isPassword={true}
            lable={"Password"}
        />

      </View>

        <WideBbuttonComponent
            loading={loading}
            lable={"Login"}
            onPress={()=>{
                if(email !== "" && password !== ""){
                    login()
                }else{
                    Alert.alert("Warning", "Please Enter Email and Password")
                }
            }}
        />

      <Text style={{alignSelf:"flex-end", color:"#C83187", marginTop:10, fontSize:15}}>{"Forgot Password ?"}</Text>

      <Text
          onPress={()=>{props.navigation.navigate("Signup")}}
          style={{alignSelf:"center", color:"#000", marginTop:30, fontSize:16}}>

        {"Don't Have Account ?"}

        <Text style={{ color:"#C83187"}}>
          {" Register Now"}
        </Text>

      </Text>
    </View>
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
