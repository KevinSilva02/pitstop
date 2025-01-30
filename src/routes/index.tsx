import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes  from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { AppRoutes } from "./app.routes";



export function Routes(){
    const {user} = useContext(AuthContext)
    return(
        <View style={{flex: 1}}>
            <NavigationContainer>
                {
                    user ?
                    <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    )
}