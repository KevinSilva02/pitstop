import { FlatList, Text, View } from 'react-native'
import { style } from './style'
import Header from '../../components/header'
import Button from '../../components/button'
import { useState } from 'react'
import CardEvent from '../../components/cardEvent'

type EventProps = {
    Id: string,
    Titulo: string,
    KmAtual: number,
    KmProx: number,
    data: string,
}

const Evento = [
    {
    Id: '1',
    Titulo: "Troca de oleo",
    KmAtual: 150000,
    KmProx: 160000,
    data: "01/01/2026"
}
]


export default function Event(){
    const [event, setEvent] = useState<EventProps[]>([])
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
            <Button Title='Cadastrar Novo Evento' />
        </View>
    )
}