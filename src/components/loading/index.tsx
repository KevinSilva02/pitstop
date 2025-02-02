import { ActivityIndicator, View } from 'react-native'

import { style } from './style'

export default function Loading(){
    return(
        <View style={style.container}>
            <ActivityIndicator color="#7C3AED" />
        </View>
    )
}