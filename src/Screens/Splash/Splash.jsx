import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from '../Login'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation()


    setTimeout(async () => {
        const token = await AsyncStorage.getItem("token")
        console.log("token", token);
        if (!token) {
            navigation.navigate("login")
        }
        else {
            navigation.navigate("base")
        }
    }, 6000)

    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash