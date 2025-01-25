import { Text, View, Image } from 'react-native'
import { style } from './style'

import Input from '../../components/input'
import Button from '../../components/button'

export default function SingIn() {
    return (
        <View style={style.container}>
            <Image source={require('../../assets/icon.png')} style={style.logo} />
            <View style={style.body}>
                <Input placeholder='Email' />
                <Input placeholder='Senha' />
                <Button Title='Entrar' />
                <Text style={style.text}>Cadastre-Se</Text>
            </View>
        </View>
    )
}