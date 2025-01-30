import { Text, View, Image, Alert } from 'react-native'
import { style } from './style'

import Input from '../../components/input'
import Button from '../../components/button'
import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authContext'

export default function SingIn() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { login } = useContext(AuthContext)

    async function handleLogin(){
        if(!email.trim() || !senha.trim()){
            Alert.alert("Login", "Preencha todos os campos")
        }
    }

    const navigation = useNavigation()
    function handleSingUp(){
        navigation.navigate('singUp')
    }
    return (
        <View style={style.container}>
            <Image source={require('../../assets/icon.png')} style={style.logo} />
            <View style={style.body}>
                <Input placeholder='Email' onChangeText={setEmail} />
                <Input placeholder='Senha' onChangeText={setSenha} secureTextEntry/>
                <Button  Title='Entrar' onPress={() => login(email, senha)} />
                <Text style={style.text} onPress={handleSingUp}>Cadastre-Se</Text>
            </View>
        </View>
    )
}