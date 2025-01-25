import { Pressable, PressableProps, Text, View } from "react-native";
import { style } from "./style";

import { FontAwesome5 } from "@expo/vector-icons"

type Props = PressableProps & {
    Id: string,
    Marca: string,
    Modelo: string,
    Tipo: string
}

export default function CardVehicle({Id, Marca, Modelo, Tipo, ...resr}:Props) {
    return(
        <Pressable style={style.container}>
            {
                Tipo === "Carro" ?
            <FontAwesome5 name="car" size={24} color="black" /> :
            <FontAwesome5 name="motorcycle" size={24} color="black" /> 
            
            }
            <View></View>
            <Text>{Modelo}</Text>
        </Pressable>
    )
}