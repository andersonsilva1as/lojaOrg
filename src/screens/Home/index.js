import React from "react";
import { View } from "react-native";

import Topo from "./Components/topo";
import Produtores from "./Components/Produtores";

export default function HomeScreen(){
    return(
        <Produtores topo = {Topo}/>
    )
}