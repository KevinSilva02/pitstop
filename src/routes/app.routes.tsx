import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import NewVehicle from "../screens/newVehicle";
import Event from "../screens/event";
import NewEvent from "../screens/newEvent";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home} />
            <Screen name="newVehicle" component={NewVehicle} />
            <Screen name="event" component={Event} />
            <Screen name="newEvent" component={NewEvent} />
        </Navigator>
    )
}