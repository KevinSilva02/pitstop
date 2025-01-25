import { View, Text } from 'react-native'
import { style } from './style'
import { Feather } from '@expo/vector-icons'

type Props = {
    Id: string,
    Titulo: string,
    KmAtual: number,
    KmProx: number,
    data: string
}

export default function CardEvent({Id, Titulo, KmAtual, KmProx, data}:Props){
    return(
        <View style={style.container}>
            <View>
                <Text>{Titulo}</Text>
                <Text>KM Atual: {KmAtual}</Text>
                <Text>KM Prox: {KmProx}</Text>
                <Text>{data}</Text>
            </View>
            <Feather name='trash' size={20} color='white' />
        </View>
    )
}