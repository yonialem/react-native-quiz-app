import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert, BackHandler,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import HeaderWithLogo from "../Components/HeaderWithLogo";
import SubHeader from "../Components/SubHeader";
import CategoryButton from "../Components/CategoryButton";
import Transport from "../Transport";
export default function Library(props) {

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

    fetchCategories();

  }, []);
  return (
    <SafeAreaView style={{ width:"100%", paddingTop:23 , backgroundColor:"#F0F1F3", height:"100%"}}>

      <StatusBar hidden={false} />

      <HeaderWithLogo lable={"Real Estate Practice"}/>

      <ScrollView style={{width:"100%", height:"100%", padding:15, marginBottom:55}}>

        <SubHeader
            lable={"Study Topics"}
            count={72}
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
                            onPress={()=>{props.navigation.navigate("Topics",{item})}}
                        />
                    )
          }
        </View>

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
