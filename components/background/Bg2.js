import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bg2 = () => {
  return (
    <View style={styles.container}>
      <Text>Bg2</Text>
    </View>
  )
}

export default Bg2


const styles = StyleSheet.create({
  container : {
    padding : "10px",
    backgroundColor : "#dff9fb",
    height:"100vh"
  }
})