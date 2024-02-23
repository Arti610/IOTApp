import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateBox from '../Screens/CreateBox';
import Base from '../Screens/Base';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();


export default function DrawerNavigation() {
    const dimension = useWindowDimensions()
    return (
        // <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="createbox"
            screenOptions={{
                drawerType: dimension.width >= 768 ? 'permanent' : 'front',
                // drawerStyle: dimension.width >= 768 ? null : { width: '100%' },
                // overlayColor: 'transparent',
            }}

        >
            <Drawer.Screen name="createbox" component={CreateBox} options={{ title: "Create Box", }} />
            <Drawer.Screen name="Logout" component={Base} options={{ title: "Logout", }} />

        </Drawer.Navigator>
        // </NavigationContainer>
    );
}