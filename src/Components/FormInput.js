import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import FormButtonSubmit from './FormButtonSubmit'

const FormInput = (props) => {
const { placeholder, title, secureTextEntry } = props
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry} 
                {...props}
            />
        </>
    )
}

export default FormInput

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#194D33',
        width: "100%",
        height: 35,
        fontSize: 16,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,

    }
})