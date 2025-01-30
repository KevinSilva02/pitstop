import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../screens/singIn";
import SingUp from "../screens/singUp";

const { Navigator, Screen } = createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false  }}>
            <Screen name="singIn" component={SingIn} />
            <Screen name="singUp" component={SingUp} />
        </Navigator>
    )
}