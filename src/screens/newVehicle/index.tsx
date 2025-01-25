import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { style } from './style';
import Header from '../../components/header';
import Input from '../../components/input';
import Button from '../../components/button';

export default function NewVehicle(){
    return(
        <View style={style.container}>
            <View>
                <Header title='Novo Veiculo' />
                <Text>Modelo: </Text>
                <Input placeholder='Uno Way' />
                <Text>Marca: </Text>
                <Input placeholder='Fiat' />
                <Text>Tipo:</Text>
                <View style={style.choose}>
                    <Picker style={style.picker}>
                        <Picker.Item label='Carro' value="Carro" />
                        <Picker.Item label='Moto' value="Moto" />
                    </Picker>
                </View>
            </View>
            <View style={style.choose}>
                <Button Title='Cadastrar novo veiculo' />
            </View>
        </View>
    )
}