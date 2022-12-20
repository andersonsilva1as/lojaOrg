import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import Logo from "../../../../assets/logo.png"

export default function Topo(){
    return(
        <View style = {styles.container}>
            <Image source={Logo} style = {styles.logo}/>
            <Text>Olá Anderson</Text>
            <Text>Encontre os melhores produtores!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6'
    },
    logo: {
        width: 80,
        height: 80,
        aspectRatio: 2.48
    }
})