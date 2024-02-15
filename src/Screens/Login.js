import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Button from '../Components/FormComponents/Button/Button'
import Heading from '../Components/Typographics/Heading'
import Input from '../Components/FormComponents/Input'
import PasswordInput from '../Components/FormComponents/PasswordInput'
import Container from '../Components/Containers/Container'

const Login = () => {
    const handleLogin = () => {
        console.log("handle Login");
    }
    return (
        <SafeAreaView>
            <Container>
                <Heading heading="Login" />
                <Input placeholder="Enter Email"/>
                <PasswordInput placeholder="Enter Password"/>
                <Button title="Login" handlePress={handleLogin} />
            </Container>
        </SafeAreaView>
    )
}

export default Login