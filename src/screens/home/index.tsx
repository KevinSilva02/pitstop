import { View, Image, FlatList, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { style } from './style'
import Button from '../../components/button'
import { useState } from 'react'
import CardVehicle from '../../components/cardVehicle'

type CarroProps = {
    Id: string,
    Modelo: string,
    Marca: string,
    Tipo: string
}

const Veiculos =[ 
{
    Id: '',
    Modelo: "Uno Way",
    Marca: "Fiat",
    Tipo: "Carro"
}
,
{
    Id: '2',
    Modelo: "Factor 150",
    Marca: "Yamaha",
    Tipo: 'Moto'
}]

export default function Home(){
    const [carro, setCarro] = useState<CarroProps[]>(Veiculos)
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require('../../assets/icon.png')} style={style.logo} />
                <View></View>
                <Feather name='log-out' color='#000' size={35} />
            </View>
            <View style={style.list}>
                <FlatList 
                    data={carro}
                    keyExtractor={item => item.Id}
                    renderItem={({item}) => <CardVehicle Marca={item.Marca} Modelo={item.Modelo} Tipo={item.Tipo} Id={item.Id} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 100, marginTop: 10}}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>Você não possui veiculos cadastrado </Text>
                        </View>
                    )}
                />
                <Button Title='Cadastra novo veiculo'/>
            </View>
        </View>
    )
}