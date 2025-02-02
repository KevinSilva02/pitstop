import { createContext, useState } from "react"
import { api } from "../libs/axios"

type Props = {
    user?: {
        id?: string
        nome?: string
        email?: string
    }
    login: (email:string, senha:string)=>Promise<void>
    logOut: ()=>void
}

type userProps = {
    id?: string
    nome?: string
    email?: string
}

export const AuthContext = createContext({} as Props)

export default function AuthContextProvider({children}: any){
    const [user, setUser] = useState<userProps>()

    async function login(email: any, senha: any){
        try{
            const response = await api.post('/login', {email, senha})
            setUser(response.data)
            console.log(response.data)
        } catch(error) {
            console.log(error)
        }
    }
    function logOut(){
        setUser(undefined)
    }

    return(
        <AuthContext.Provider value={{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}