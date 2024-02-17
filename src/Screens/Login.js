import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Heading from '../Components/Typographics/Heading';
import Input from '../Components/FormComponents/Input';
import PasswordInput from '../Components/FormComponents/PasswordInput';
import Container from '../Components/Containers/Container';
import {Formik, useFormik} from 'formik';
import loginSchema from '../App/ValidationSchema';
import UserApi from '../APIs/UserApi';
import BTN from '../Components/FormComponents/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const handleLogin = async values => {
    // console.log('handle Login', values);
    //    try {
    //     const userRes=await UserApi.getAllUsersById(1)
    //     console.log("userRes",userRes);
    //    } catch (error) {
    //     console.log(JSON.stringify(error));

    //    }

    const userData = {
      id: 1,
      username: 'admin1',
      password: 'Admin@12345',
      role: 'admin',
      accessToken:
        'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6ImFkbWluMSIsImV4cCI6MTcyNzQ5ODk1NSwiaWF0IjoxNzA4MTQ1Mzg4fQ.Gu3eNtXTcROvim_8mmlLx8rAoBkpN7FZPc70EgHanws',
      refreshToken:
        'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6ImFkbWluMSIsImV4cCI6MTcyNzQ5ODk1NSwiaWF0IjoxNzA4MTQ1Mzg4fQ.Gu3eNtXTcROvim_8mmlLx8rAoBkpN7FZPc70EgHanws',
      firstName: 'Admin',
      lastName: 'One',
      email: 'admin@gmail.com',
    };
    if (
      values.email == userData.email &&
      values.password == userData.password
    ) {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        console.log('set success');
      } catch (error) {
        console.log('storage error', error);
      }
    } else {
      console.log('not match');
    }
  };

  return (
    <SafeAreaView>
      <Formik
        initialValues={{email: '', password: ''}}
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
