import {Button } from 'react-native'
import React from 'react'

const BTN = ({handlePress, title}) => {

  return (
    <Button
    onPress={handlePress}
    title={title}
  />
  )
}

export default BTN