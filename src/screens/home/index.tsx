import { View, Image, FlatList, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { style } from './style'
import Button from '../../components/button'
import { useContext, useEffect, useState } from 'react'
import CardVehicle from '../../components/cardVehicle'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/authContext'
import { api } from '../../libs/axios'
import  Loading from '../../components/loading'

type CarroProps = {
    id: string,
    modelo: string,
    marca: string,
    tipo: string
}


export default function Home(){
    const [carro, setCarro] = useState<CarroProps[]>([])
    const [loading, setLoading] = useState(true)

    const { logOut, user } = useContext(AuthContext)
    const navigation = useNavigation()

    function handleNewVehicle(){
        navigation.navigate('newVehicle')
    }

    function handleEvent(){
        
    }

    async function fetchData(){
        try{
            setLoading(true)
            const response = await api.get(`/vehicle/${user?.id}`)
            setCarro(response.data)
            console.log(carro)

        } catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading){
        return <Loading />
    }
    
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={require('../../assets/icon.png')} style={style.logo} />
                <View></View>
                <Feather name='log-out' color='#000' size={35} onPress={logOut} />
            </View>
            <View style={style.list}>
                <FlatList 
                    data={carro}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <CardVehicle Marca={item.marca} Modelo={item.modelo} Tipo={item.tipo} Id={item.id} onPress={()=>{navigation.navigate('event',{vehicleId: item.id})}} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 100, marginTop: 10}}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>Você não possui veiculos cadastrado </Text>
                        </View>
                    )}
                />
                <Button Title='Cadastra novo veiculo' onPress={handleNewVehicle} />
            </View>
        </View>
    )
}