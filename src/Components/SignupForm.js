import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function SignupForm() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center', 
        width: Dimensions.get('window').width,
    },
    title:{
        fontSize: 30, 
        fontWeight: 'bold'

    }
})