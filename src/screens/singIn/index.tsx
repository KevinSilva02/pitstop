import { Text, View, Image } from 'react-native'
import { style } from './style'

export default function SingIn() {
    return (
        <View style={style.container}>
            <Image source={require('../../assets/icon.png')} style={style.logo} />
            <View style={style.body}>

            </View>
        </View>
    )
}