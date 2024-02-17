import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const Input = ({name,placeholder,handleOnchange,handleBlur,values,touched,errors}) => {
  // console.log("name",name);
  // console.log("Values",values);
  // console.log("handleOnchange",handleOnchange);
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
   <View>
     <TextInput
     name={name}
    placeholder={placeholder}
    value={values?values:""}
    onChangeText={handleOnchange(name)}
    onBlur={handleBlur(name)}
    style={styles.TextInputStyle}    
    />
    <Text>
      {errors}
    </Text>
   </View>
  )
}

export default Input