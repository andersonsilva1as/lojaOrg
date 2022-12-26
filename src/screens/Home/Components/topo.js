import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { requestTopo } from '../../../services/request'

import Logo from "../../../../assets/logo.png"

class Topo extends React.Component{
    state = {
        topo: {
            boasVindas: ' ',
            legenda: ' ',
        }
    }
    atualizaTopo(){
        const retorno = requestTopo();
        this.setState({topo: retorno})
    }
    componentDidMount(){
        this.atualizaTopo();
    }

    render() {
        return(
            <View style = {styles.container}>
                <Image source={Logo} style = {styles.logo}/>
                <Text style = {styles.boarding}>{this.state.topo.boasVindas}</Text>
                <Text>{this.state.topo.legenda}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    },
    logo: {
        width: 70,
        height: 28,
        aspectRatio: 2.48
    },
    boarding: {
        marginTop: 24,
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 42,
    },
    legend: {
        fontSize: 16,
        lineHeight: 42,
    }
})


export default Topo;