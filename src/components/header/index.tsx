import { Image, Text, View } from "react-native";
import { style } from "./style";
import { Feather } from "@expo/vector-icons"

type Props = {
    title: string
}

export default function Header({title}:Props){
    return(
        <View style={style.container}>
            <Feather name="arrow-left" size={20} color="black" />
            <Text>{title}</Text>
            <View></View>
        </View>
    )    
}