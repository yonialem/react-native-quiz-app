import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import Login from "../Screens/Login";
import Signup from '../Screens/Signup';
import Practice from "../Screens/Practice";
import Profile from "../Screens/Profile";
import Upgrade from "../Screens/Upgrade";
import Question from "../Screens/Question";
import Library from "../Screens/Library";
import Topics from "../Screens/Topics";
import Explanation from "../Screens/Explanation";
import Performance from "../Screens/Performance";
import HeaderWithLogo from "../Components/HeaderWithLogo";
import NavigationBar from "../Components/NavigationBar";
import {View} from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function practiceStack() {
    return (
        <Stack.Navigator initialRouteName={"Practice"} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Practice" component={Practice}/>
            <Stack.Screen name="Question" component={Question}/>
        </Stack.Navigator>
    )
}

function libraryStack() {
    return (
        <Stack.Navigator initialRouteName={"Library"} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Library" component={Library}/>
            <Stack.Screen name="Topics" component={Topics}/>
            <Stack.Screen name="Explanation" component={Explanation}/>
        </Stack.Navigator>
    )
}

function performanceStack() {
    return (
        <Stack.Navigator initialRouteName={"Performance"} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Performance" component={Performance}/>
        </Stack.Navigator>
    )
}

function profileStack() {
    return (
        <Stack.Navigator initialRouteName={"Profile"} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Upgrade" component={Upgrade}/>
        </Stack.Navigator>
    )
}

function authStack() {
    return (
        <Stack.Navigator initialRouteName={"Login"} screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    )
}

function tabNavigator() {
    return (
        <Tab.Navigator
            tabBar={props=><NavigationBar {...props}/>}
            initialRouteName={"Profile"} screenOptions={{headerShown: false}}>
            <Tab.Screen name="practiceStack" component={practiceStack} />
            <Tab.Screen name="libraryStack" component={libraryStack} />
            <Tab.Screen name="performanceStack" component={performanceStack} />
            <Tab.Screen name="profileStack" component={profileStack} />
        </Tab.Navigator>
    );
}

function appNavigator() {
    return (
        <Tab.Navigator
            tabBar={props=><View/>}
            initialRouteName={"authStack"} screenOptions={{headerShown: false}}>
            <Tab.Screen name="authStack" component={authStack} />
            <Tab.Screen name="tabNavigator" component={tabNavigator} />
        </Tab.Navigator>
    );
}



export default function Routes() {
    return (
        <NavigationContainer>
            {appNavigator()}
        </NavigationContainer>
    );
}
