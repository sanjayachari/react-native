import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const IconComp = ({focused,name,type}) => {
  // console.log('focused,name,type',focused,name,type)
  // console.log('userrrr', name)
  return (
    <AntDesign name={name} size={24} color="black" />
 
  );
};

export default IconComp;

const styles = StyleSheet.create({
  container: {
    // Add any necessary styling here
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

// You can also define other styles here if needed
