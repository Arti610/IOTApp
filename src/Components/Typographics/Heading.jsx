import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Heading = ({heading,fs,color,}) => {
  
    const styles=StyleSheet.create({
       heading:{
        color : color ?color : "#000",
        fontSize : fs ? fs : 18,
       }
        })

  return (   
  <Text style={styles.heading}>{heading}</Text>
  )
}

export default Heading


