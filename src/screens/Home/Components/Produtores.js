import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import Produtor from "./Produtor";
import setProdutores from "../../../hooks/setProdutores";


export default function Produtores({topo: Topo}){
    const [titulo, lista] = setProdutores()

    const topoLista = () => {
        return <>
            <Topo/>
            <Text style = {styles.title}>{titulo}</Text>
            </>
    }
    return <FlatList
        data={lista}
        renderItem = { ({item}) => <Produtor {...item}/>}
        keyExtractor = {(name) => name}
        ListHeaderComponent = {topoLista()}
    />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})