import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator,View } from "react-native";
import { Data } from "../../utils/context";

export default function Process({route,navigation}){
    const {UserName,Password} = route.params;
    const [credentials] = useContext(Data)
    console.log(JSON.stringify(route));
    console.log(credentials,1);
    useEffect(()=>{
    if(credentials.hasOwnProperty(UserName))
    {
        console.log(credentials[UserName]);
        
        if(credentials[UserName].Password==Password){
            navigation.push("Home",credentials[UserName])
        }
        else{
            navigation.navigate("SignIn",{result:1});}
    }
    else{
        navigation.navigate("SignIn",{result:1});
    }},[])
    return (
        <>
        <View>
            <ActivityIndicator></ActivityIndicator>
        </View>
        </>
    )
}
