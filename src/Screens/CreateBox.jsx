import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from '../Components/FormComponents/Input'
import { Formik } from 'formik'
import Container from '../Components/Containers/Container'
import Heading from '../Components/Typographics/Heading'

const CreateBox = () => {
    const initial = {
        box_no: "",
        box_name: "",
        latitude: "",
        logitude: "",
    }

    return (
        <Formik
            initialValues={initial}
            // validationSchema={loginSchema}
            onSubmit={(values) => {
                console.log(values);
            }}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
            }) => (<Container>
                <Heading heading="Box No." />
                <Input
                    name="box_no"
                    value={values.box_no}
                    handleOnchange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors.box_no}
                />
                <Heading heading="Box Name" />
                <Input
                    name="box_name"
                    value={values.box_name}
                    handleOnchange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors.box_name}
                />

            </Container>)}
        </Formik>
    )
}

export default CreateBox

const styles = StyleSheet.create({

})