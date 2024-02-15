import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const SubHeading = ({Subheading,fs,color,}) => {
    const styles=StyleSheet.create({
       Subheading:{
        color:color?color:"#000",
        fontSize:fs?fs:10,
       }
        })

  return (   
  <Text style={styles.Subheading}>{Subheading}</Text>
  )
}

export default SubHeading


