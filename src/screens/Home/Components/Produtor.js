import React, { useReducer, useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Estrelas from "../../../Componentes/estrelas";

export default function Produtor( {name, image, distancia, estrelas} ){
    //const [ selecionado, setSelecionado ] = useState(false)
    const [ selecionado, inverteSelecionado] = useReducer(
        (selecionado) => !selecionado, false
    )
    return (
        <TouchableOpacity style = {styles.card}
            onPress={inverteSelecionado}
        >
            <Image source={image} accessibilityLabel={name} style = {styles.imagen}/>
            <View style = {styles.informations}>
                <View>
                <Text style = {styles.nome}>{name}</Text>
                <Estrelas 
                    quantidade={estrelas}
                    editavel = {selecionado}
                    grande = {selecionado}
                />
                </View>
                <Text style={styles.distancia}>{distancia}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F8',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        

        //Android
        elevation: 6,

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    imagen: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informations: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },
})