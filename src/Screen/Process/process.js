import React, { useContext, useState } from "react";
import { ActivityIndicator,View } from "react-native";
import { Data } from "../../utils/context";

export default function Process({route,navigation}){
    const [check,setCheck] = useState(true)
    const {UserName,Password} = route.params;
    const [credentials] = useContext(Data)
    console.log(JSON.stringify(route));
    setTimeout(()=>{setCheck(false);
    if(credentials.hasOwnProperty(UserName))
    {
        console.log(credentials[UserName]);
        
        if(credentials[UserName].Password==Password){
            navigation.push("Home")
        }
        else{
            navigation.navigate("SignIn");}
    }
    else{
        navigation.navigate("SignIn");
    }},5000);
    return (
        <>
        {check &&
        <View>
            <ActivityIndicator></ActivityIndicator>
        </View>}
        </>
    )
}
