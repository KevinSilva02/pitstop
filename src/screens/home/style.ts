import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%'
    },
    header: {
        marginTop:30,
        height: 95,
        width: '100%',
        backgroundColor: '#ADDBE8',
        alignItems: 'center',
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        width: 71,
        height: 71
    },
    list: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex',
        flex: 3
    }
    
})