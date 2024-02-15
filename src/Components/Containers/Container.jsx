import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Container = props => {
//   console.log('props', props);
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      gap:10,
      justifyContent:"space-evenly",
      alignItems:"stretch"

    },
  });
  return <View style={styles.container}>{props.children}</View>;
};

export default Container;
