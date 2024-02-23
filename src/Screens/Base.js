import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import DrawerNavigation from '../Navigations/DrawerNavigation'


const Base = () => {
    const navigation = useNavigation()

    const logout = async () => {
        const rmToken = await AsyncStorage.removeItem('token')
        console.log("rmToken", rmToken);
        navigation.navigate("login")

    }

    return (

        <View>
            <Text>Base</Text>
            <Button
                onPress={logout}
                title={"logout"}
            />
        </View>

    )
}

export default Base