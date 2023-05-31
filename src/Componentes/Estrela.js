import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";

import estrela from '../../assets/estrela.png'
import estrelaCinza from '../../assets/estrelaCinza.png'

export default function Estrela({
    desabilitada = true,
    onPress,
    preenchida,
    grande = false,
}) {
    const styles = stylesFunction(grande)
    const getImage = () => {
        if(preenchida) {
            return estrela
        }else {
            return estrelaCinza
        }
    }
    return <TouchableOpacity
                disabled = {desabilitada}
                onPress = {onPress}
            >
                <Image source={getImage()} style={styles.estrela}/>
            </TouchableOpacity>
}
const stylesFunction = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36: 12,
    }
})