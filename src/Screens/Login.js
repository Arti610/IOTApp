import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import Heading from '../Components/Typographics/Heading';
import Input from '../Components/FormComponents/Input';
import PasswordInput from '../Components/FormComponents/PasswordInput';
import Container from '../Components/Containers/Container';
import { Formik, useFormik } from 'formik';
import loginSchema from '../App/ValidationSchema';
import BTN from '../Components/FormComponents/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserApi from '../APIs/UserApi'
import API_CONFIG from '../Config/config.js';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const handleLogin = async (values) => {
    console.log("values", values);
    setLoading(true)
    try {
      const res = await UserApi.login(values)
      const token = await AsyncStorage.setItem("token", res.data.data.accessToken)
      navigation.navigate("base")

      console.log("Login::res", res.data.data.accessToken);

    } catch (error) {
      console.log(JSON.stringify(error));
    }
    setLoading(false)
  };

  if (loading) {
    return (<Heading heading="Loading..." />)
  }

  return (
    <SafeAreaView>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <Container>
            <Heading heading="Login" />
            <Input
              name="email"
              handleOnchange={handleChange}
              handleBlur={handleBlur}
              values={values.email}
              touched={touched}
              errors={errors.email}
              placeholder="Enter Email"
            />
            <PasswordInput
              name="password"
              handleOnchange={handleChange}
              handleBlur={handleBlur}
              values={values.password}
              touched={touched}
              errors={errors.password}
              placeholder="Enter Password"
            />
            <BTN title="Login" handlePress={handleSubmit} />
          </Container>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
