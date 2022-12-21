import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function FormButton({title, backgroundColor, style}) {
  return (
    <TouchableWithoutFeedback>
          <View style={[Styles.container, style, {backgroundColor: backgroundColor}]}>
            <Text style={Styles.title}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
  )
}

const Styles = StyleSheet.create({
    container:{
        height: 45, 
        width: '50%', 
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor: "#194D33"
    },
    title:{
        color: 'white', 
        fontSize: 20
    }
})