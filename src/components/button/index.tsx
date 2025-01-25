import { Pressable, PressableProps, Text } from 'react-native'
import { style } from './style'

type Props = PressableProps & {
    Title: string
}

export default function Button({Title, ...rest} : Props){
    return(
        <Pressable
            style={style.button}
            {...rest}
        >
            <Text style={style.title}>{Title}</Text>
        </Pressable>
    )
}