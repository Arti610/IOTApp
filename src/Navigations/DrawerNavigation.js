import { createDrawerNavigator } from '@react-navigation/drawer';
import CreateBox from '../Screens/CreateBox';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="create-box" component={CreateBox} />

        </Drawer.Navigator>
    );
}