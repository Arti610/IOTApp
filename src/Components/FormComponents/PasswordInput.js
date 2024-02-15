import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const PasswordInput = ({placeholder,value,handleOnchange}) => {
  const styles=StyleSheet.create({
    TextInputStyle:{
        borderWidth: 1,
        borderColor: '#D0D5DD',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        position: 'relative',
    }
  })
  return (
    <TextInput
    placeholder={placeholder}
    value={value?value:""}
    onChangeText={handleOnchange}
    style={styles.TextInputStyle}
    secureTextEntry
    
    />
  )
}

export default PasswordInput