import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login';

import Base from '../Screens/Base.js'
const Stack = createNativeStackNavigator();

const StackNaviation = () => {
    return (

        < NavigationContainer >
            <Stack.Navigator
                screenOptions={{ headerShown: true }}
                initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="base" component={Base} />
                <Stack.Screen name="login" component={Login} />

                {/* <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="base" component={Base} /> */}

            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default StackNaviation