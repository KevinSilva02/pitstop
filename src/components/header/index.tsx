import { Image, Text, View } from "react-native";
import { style } from "./style";
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string
}

export default function Header({title}:Props){
    const navigation = useNavigation()
    function handleGoBack(){
        navigation.goBack()
    }
    return(
        <View style={style.container}>
            <Feather name="arrow-left" size={20} color="black" onPress={handleGoBack} />
            <Text>{title}</Text>
            <View></View>
        </View>
    )    
}