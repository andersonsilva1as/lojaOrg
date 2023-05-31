import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)
    
    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for( let i = 0; i < 5; i++){
            listaEstrelas.push(
                <Estrela
                    key={i}
                    onPress = { () => setQuantidade( i+1 )}
                    desabilitada = {!editavel}
                    preenchida = { i < quantidade }
                    grande = {grande}
                />
            )
        }
        return listaEstrelas;
    }
    return (
        <View style = {styles.container}>
            <RenderEstrelas/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

})