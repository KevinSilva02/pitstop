import { FlatList, Text, View } from 'react-native'
import { style } from './style'
import Header from '../../components/header'
import Button from '../../components/button'
import { useState } from 'react'
import CardEvent from '../../components/cardEvent'
import { useNavigation, useRoute } from '@react-navigation/native'

type EventProps = {
    Id: string,
    Titulo: string,
    KmAtual: number,
    KmProx: number,
    data: string,
}

type RouteParams = {
    vehicleId: string
}




export default function Event(){
    const [event, setEvent] = useState<EventProps[]>([])
    

    const navigation = useNavigation()
    const route = useRoute()

    const { vehicleId } = route.params as RouteParams
    
    function handleNewEvent(){
        navigation.navigate('newEvent', {vehicleId})
    }
    return(
        <View style={style.container}>
            <Header title='Eventos' />
            <FlatList
                data={event}
                keyExtractor={item => item.Id}
                renderItem={({item}) => <CardEvent Id={item.Id} Titulo={item.Titulo} KmAtual={item.KmAtual} KmProx={item.KmProx} data={item.data} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100, marginTop: 10}}
                ListEmptyComponent={() => (
                    <View>
                        <Text>Você não possui eventos registrados</Text>
                    </View>
                )}
            />
            <Button Title='Cadastrar Novo Evento' onPress={handleNewEvent} />
        </View>
    )
}