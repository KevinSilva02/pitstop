import { useState } from "react"
import { Text, View, Image, Alert } from "react-native"

import { style } from "./style"

import { api } from "../../libs/axios"

import Input from "../../components/input"
import Button from "../../components/button"

export default function SingUp() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSingUp(){
        if(!nome.trim() || !email.trim() || !senha.trim()){
            Alert.alert("Cadastro","Prencha Todos os Campos")
        }

        try{
            const response = await api.post('/singUp', {nome, email, senha})
            Alert.alert(response.data)
        } catch(error) {
            console.log(error, "Error ao cadastrar")
        }

    }

    return (
        <View style={style.container}>
            <Image source={require('../../assets/icon.png')} style={style.logo} />
            <View style={style.body}>
                <Input placeholder='Nome' onChangeText={setNome} />
                <Input placeholder='Email' onChangeText={setEmail} />
                <Input placeholder='Senha' onChangeText={setSenha} />
                <Button Title='Cadastrar' onPress={handleSingUp} />                
            </View>
        </View>
    )
}