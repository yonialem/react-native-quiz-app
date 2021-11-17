import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import TextInputComponent from "../Components/TextInputComponent";
import WideBbuttonComponent from "../Components/WideBbuttonComponent";
import Transport from "../Transport";

export default function Signup(props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signup = () => {
        setLoading(true)
        Transport.HTTP.signup(
            {
                "email": email,
                "firstName": fullName.split(" ")[0],
                "lastName":  fullName.split(" ")[1],
                "phoneNumber": "0987654321",
                "password": password,
                "isAdmin": true
            }
        ).then(response=>{
            setLoading(false)
            if(response.data.success){

                Alert.alert("Success","Signup Successful,\nLogin to proceed",
                    [
                        { text: "Continue to Login", onPress: () => props.navigation.navigate("Login") }
                    ]
                )
            }else{
                Alert.alert("Error", response.data.data)
            }
        }).catch(error=>{
            setLoading(false)
            alert(error)
        })
    }
  return (
    <View style={{height:"100%",alignItems:"center", justifyContent:"center", paddingHorizontal:30}}>

      <Image style={{height:150, marginBottom:30}} source={require('../../assets/logo_full.png')} resizeMode={"contain"}/>

      <View style={{width:"100%"}}>

        <Text style={{color:"#1E2226", fontSize:30}}>
          {"Signup"}
        </Text>

        <Text style={{color:"#787A7D", fontSize:19, marginTop:10, marginBottom:20}}>
          {"Please enter the following details."}
        </Text>

          <TextInputComponent
              value={fullName}
              onChangeText={(text)=>{setFullName(text)}}
              isPassword={false}
              lable={"Full Name"}
          />

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

          <TextInputComponent
              value={confirmPassword}
              onChangeText={(text)=>{setConfirmPassword(text)}}
              isPassword={true}
              lable={"Confirm Password"}/>


      </View>
        <WideBbuttonComponent
            lable={"Sign Up"}
            loading={loading}
            onPress={()=>{
                if(email !== "" && fullName !== "" && password === confirmPassword && password !== "" ){
                    signup()
                }else{
                    Alert.alert("Warning", "Please fill form completely.")
                }
                // props.navigation.navigate("Login")
            }}
        />

      <Text
          onPress={()=>{props.navigation.navigate("Login")}}
          style={{alignSelf:"center", color:"#000", marginTop:30, fontSize:16}}>

        {"Already Have Account ?"}

        <Text style={{ color:"#C83187"}}>
          {" Login"}
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
