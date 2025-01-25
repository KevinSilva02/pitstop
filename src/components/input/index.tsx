import { TextInput, TextInputProps } from 'react-native'
import { style } from './style'

type Props = TextInputProps & {
    placeholder: string
}

export default function Input({placeholder, ...rest} : Props){
    return(
        <TextInput
            style={style.input}
            placeholder={placeholder}
            {...rest}
        >

        </TextInput>
    )
}