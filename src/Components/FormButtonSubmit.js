import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const FormButtonSubmit = ({title, onPress}) => {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </>
    )
}

export default FormButtonSubmit

const styles = StyleSheet.create({
      button:{
        width: "100%",
        backgroundColor:'#194D33',
        alignItems:'center',
        justifyContent:'center',
        height: 45,
        borderRadius: 10,
        marginTop: 10,
      },
      title:{
        fontSize: 20,
        color:'white',
        fontWeight:'bold'
      }
})