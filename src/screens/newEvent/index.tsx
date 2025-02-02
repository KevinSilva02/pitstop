import { View, Text, Alert } from 'react-native'
import { style } from './style'
import Header from '../../components/header'
import Input from '../../components/input'
import Button from '../../components/button'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'

type RouteParams = {
    vehicleId: string
}

export default function NewEvent(){
    const [titulo, setTitulo] = useState('')
    const [kmAtual, setKmAtual] = useState('')
    const [kmProx, setKmProx] = useState('')
    const [data, setData] = useState('')
    
    const route = useRoute()

    const { vehicleId } = route.params as RouteParams

    async function handleNewEvent(){
        if(!titulo.trim() || !kmAtual.trim() || !kmProx.trim() || !data.trim()){
            Alert.alert('Evento', "Preencha todos os campos")
        }
    }
    return(
        <View style={style.container}>
            <View>
                <Header title='Novo Evento' />
                <Text>Titulo Evento:</Text>
                <Input placeholder='Troca de oleo' onChangeText={setTitulo} />
                <Text>Km Atual: </Text>
                <Input placeholder='157000' onChangeText={setKmAtual} />
                <Text>KM Proxima: </Text>
                <Input placeholder='167000' onChangeText={setKmProx} />
                <Text>Data: </Text>
                <Input placeholder='01/01/2025' onChangeText={setData} />
            </View>
            <View style={style.button}>
                <Button Title='Cadastrar novo evento' onPress={handleNewEvent} />
            </View>
        </View>
    )
}