import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Image,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {Icon} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Transport from "../Transport";
import WideBbuttonComponent from "../Components/WideBbuttonComponent";
export default function Question(props) {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(-1)
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [endReached, setEndReached] = useState(false)


  useEffect(() => {
    const getQuestions = () => {
      Transport.HTTP.getQuestions(props.route.params.item.id)
          .then(response=>{
            setQuestions(response.data.data.Items)
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
            {"The Job"}
          </Text>
        </View>

        {
          loading ?
              <ActivityIndicator
                  size={"large"}
                  color={"#C83187"}
                  style={{marginTop:15}}
              /> :
              questions.length === 0 ?
                  <Text style={{color:"#919191", fontSize:16, marginTop:10, marginBottom:20, textAlign:"center"}}>
                    {"No Questions found"}
                  </Text>
                  :
                  <ScrollView style={{width:"100%", height:"100%", padding:20, marginBottom:55, paddingBottom:560}}>

                    <View style={{height:80, width:"100%", backgroundColor:"#fff", marginVertical:10, borderRadius:15, padding:15}}>

                        <TouchableOpacity
                            disabled={selectedAnswer===-1}
                            onPress={()=>{
                                if(endReached){
                                    props.navigation.goBack();
                                }
                                else if(!answerSubmitted){
                                    setAnswerSubmitted(true);
                                    if(index+1===questions.length) {
                                        setEndReached(true)
                                    }
                                }else{
                                    setSelectedAnswer(-1);
                                    setAnswerSubmitted(false);
                                    if(index+1<questions.length){ setIndex(index+1) }else {
                                        setEndReached(true)
                                    }
                                }
                            }}
                            style={{height:30, position:"absolute", zIndex:99, right:10, width:100, top:10, backgroundColor:"#772E86", borderRadius:10, alignItems:"center", justifyContent:"center",}}
                        >
                            <Text style={{color:"#fff", fontSize:12, fontWeight:"700"}}>
                                { endReached? "Close" : !answerSubmitted ? "Submit Answer" : "Next Question"}
                            </Text>

                        </TouchableOpacity>

                      <Text style={{color:"#000", fontSize:16, fontWeight:"700"}}>
                        <Text style={{fontSize:25}}>{index+1}</Text>
                        {`/${questions.length}`}
                      </Text>

                      <View style={{height:8, width:"100%", backgroundColor:"#E4E4E4", marginTop:10, borderRadius:4}}>
                        <View style={{height:8, width:`${((index+1)/questions.length)*100}%`, backgroundColor:"#772E86", borderRadius:4}}/>
                      </View>

                    </View>


                    <Text style={{color:"#000", fontSize:16, marginTop:10, marginBottom:30, textAlign:"justify"}}>
                      {questions[index].question}
                    </Text>

                      <TouchableOpacity
                          onPress={()=>{
                          setSelectedAnswer(0)
                          }}
                          style={{height:80, backgroundColor: (answerSubmitted && questions[index].correctAnswer === 0) ? "#772E86" : "#fff", width:"100%", flexDirection:"row", borderWidth:1.5, borderColor: selectedAnswer === 0 ? "#772E86" : "#CCCCCC", borderRadius:15, marginBottom:15, alignItems:"center", justifyContent:"flex-start", paddingHorizontal:15}}>

                          <Ionicons name={"checkmark-circle-sharp"} color={ selectedAnswer === 0 ? "#772E86" : "#CCCCCC"} size={30}/>

                          <Text style={{ color:(answerSubmitted && questions[index].correctAnswer === 0) ? "#fff" : "#000", width:"93%",fontSize:15, marginLeft:5, flexWrap:"wrap", overflow:"hidden"}}>
                              {questions[index].choice[0]}
                              {
                                  (answerSubmitted && questions[index].correctAnswer === 0) &&
                                  <Text style={{fontSize:15, lineHeight:25, fontWeight:"700"}}>
                                      {"\nCorrect Answer"}
                                  </Text>
                              }
                          </Text>

                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={()=>{
                          setSelectedAnswer(1)
                          }}
                          style={{height:80, backgroundColor: (answerSubmitted && questions[index].correctAnswer === 1) ? "#772E86" : "#fff", width:"100%", flexDirection:"row", borderWidth:1.5, borderColor: selectedAnswer === 1 ? "#772E86" : "#CCCCCC", borderRadius:15, marginBottom:15, alignItems:"center", justifyContent:"flex-start", paddingHorizontal:15}}>

                          <Ionicons name={"checkmark-circle-sharp"} color={ selectedAnswer === 1 ? "#772E86" : "#CCCCCC"} size={30}/>

                          <Text style={{color:(answerSubmitted && questions[index].correctAnswer === 1) ? "#fff" : "#000", width:"93%",fontSize:15, marginLeft:5, flexWrap:"wrap", overflow:"hidden"}}>
                              {questions[index].choice[1]}
                              {
                                  (answerSubmitted && questions[index].correctAnswer === 1) &&
                                  <Text style={{fontSize:15, lineHeight:25, fontWeight:"700"}}>
                                      {"\nCorrect Answer"}
                                  </Text>
                              }
                          </Text>

                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={()=>{
                          setSelectedAnswer(2)
                          }}
                          style={{height:80, backgroundColor: (answerSubmitted && questions[index].correctAnswer === 2) ? "#772E86" : "#fff", width:"100%", flexDirection:"row", borderWidth:1.5, borderColor: selectedAnswer === 2 ? "#772E86" : "#CCCCCC", borderRadius:15, marginBottom:15, alignItems:"center", justifyContent:"flex-start", paddingHorizontal:15}}>

                          <Ionicons name={"checkmark-circle-sharp"} color={ selectedAnswer === 2 ? "#772E86" : "#CCCCCC"} size={30}/>

                          <Text style={{color:(answerSubmitted && questions[index].correctAnswer === 2) ? "#fff" : "#000", width:"93%",fontSize:15, marginLeft:5, flexWrap:"wrap", overflow:"hidden"}}>
                              {questions[index].choice[2]}
                              {
                                  (answerSubmitted && questions[index].correctAnswer === 2) &&
                                  <Text style={{fontSize:15, lineHeight:25, fontWeight:"700"}}>
                                      {"\nCorrect Answer"}
                                  </Text>
                              }
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={()=>{
                          setSelectedAnswer(3)
                          }}
                          style={{height:80, backgroundColor: (answerSubmitted && questions[index].correctAnswer === 3) ? "#772E86" : "#fff", width:"100%", flexDirection:"row", borderWidth:1.5, borderColor: selectedAnswer === 3 ? "#772E86" : "#CCCCCC", borderRadius:15, marginBottom:15, alignItems:"center", justifyContent:"flex-start", paddingHorizontal:15}}>

                          <Ionicons name={"checkmark-circle-sharp"} color={ selectedAnswer === 3 ? "#772E86" : "#CCCCCC"} size={30}/>

                          <Text style={{color:(answerSubmitted && questions[index].correctAnswer === 3) ? "#fff" : "#000", width:"93%",fontSize:15, marginLeft:5, flexWrap:"wrap", overflow:"hidden"}}>
                              {questions[index].choice[3]}
                              {
                                  (answerSubmitted && questions[index].correctAnswer === 3) &&
                                  <Text style={{fontSize:15, lineHeight:25, fontWeight:"700"}}>
                                      {"\nCorrect Answer"}
                                  </Text>
                              }
                          </Text>

                      </TouchableOpacity>



                  </ScrollView>


        }



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
