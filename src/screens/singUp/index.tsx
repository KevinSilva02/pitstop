import { Text, View, Image } from 'react-native'
import { style } from './style'

import Input from '../../components/input'
import Button from '../../components/button'

export default function SingUp() {
    return (
        <View style={style.container}>
            <Image source={require('../../assets/icon.png')} style={style.logo} />
            <View style={style.body}>
                <Input placeholder='Nome' />
                <Input placeholder='Email' />
                <Input placeholder='Senha' />
                <Button Title='Cadastrar' />                
            </View>
        </View>
    )
}