import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import { requestProdutores } from '../../../services/request'

export default function Produtores({topo: Topo}){
    const [titulo, setTitulo] = useState('')
    const [lista, setLista] = useState([])
    useEffect( () => {
        const retorno = requestProdutores()
        setTitulo(retorno.titulo)
        setLista(retorno.lista)
    }, [])

    const topoLista = () => {
        return <>
            <Topo/>
            <Text style = {styles.title}>{titulo}</Text>
            </>
    }
    return <FlatList
        data={lista}
        renderItem = { ({item : {name}}) => <Text>{name}</Text>}
        keyExtractor = {(name) => name}
        ListHeaderComponent = {topoLista()}
    />
}

styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})