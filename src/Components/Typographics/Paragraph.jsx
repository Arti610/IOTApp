import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Paragraph = ({Paragraph,fs,color,}) => {
    const styles=StyleSheet.create({
       Paragraph:{
        color:color?color:"#000",
        fontSize:fs?fs:12,
       }
        })

  return (   
  <Text style={styles.Paragraph}>{Paragraph}</Text>
  )
}

export default Paragraph


