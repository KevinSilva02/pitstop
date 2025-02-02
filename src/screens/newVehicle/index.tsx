import { View, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { style } from './style';
import Header from '../../components/header';
import Input from '../../components/input';
import Button from '../../components/button';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../libs/axios';
import { AuthContext } from '../../contexts/authContext';

export default function NewVehicle(){
    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [tipo, setTipo] = useState('')

    const { user } = useContext(AuthContext)

    async function handleNewVehicle(){
        if(!modelo.trim() || !marca.trim()){
            Alert.alert("Veiculo","Preencha todos os campos")
        }

        try{
            const response = await api.post('/newVehicle',{ modelo, marca, tipo, userID: user?.id  })
            Alert.alert(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    
    return(
        <View style={style.container}>
            <View>
                <Header title='Novo Veiculo' />
                <Text>Modelo: </Text>
                <Input placeholder='Uno Way' onChangeText={setModelo} />
                <Text>Marca: </Text>
                <Input placeholder='Fiat' onChangeText={setMarca} />
                <Text>Tipo:{tipo}</Text>
                
                <View style={style.choose}>
                    <Picker style={style.picker} selectedValue={tipo} onValueChange={setTipo} >
                        <Picker.Item label='Carro' value="Carro" />
                        <Picker.Item label='Moto' value="Moto" />
                    </Picker>
                </View>
            </View>
            <View style={style.choose}>
                <Button Title='Cadastrar novo veiculo' onPress={handleNewVehicle} />
            </View>
        </View>
    )
}