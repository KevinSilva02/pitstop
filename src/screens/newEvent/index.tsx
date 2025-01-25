import { View, Text } from 'react-native'
import { style } from './style'
import Header from '../../components/header'
import Input from '../../components/input'
import Button from '../../components/button'

export default function NewEvent(){
    return(
        <View style={style.container}>
            <View>
                <Header title='Novo Evento' />
                <Text>Nome Evento:</Text>
                <Input placeholder='Troca de oleo' />
                <Text>Km Atual: </Text>
                <Input placeholder='157000' />
                <Text>KM Proxima: </Text>
                <Input placeholder='167000' />
                <Text>Data: </Text>
                <Input placeholder='01/01/2025' />
            </View>
            <View style={style.button}>
                <Button Title='Cadastrar novo evento' />
            </View>
        </View>
    )
}