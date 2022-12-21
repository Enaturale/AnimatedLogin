import { View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import FormInput from './FormInput'
import FormButtonSubmit from './FormButtonSubmit'

export default function LoginForm() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <FormInput title="Email" placeholder="example@gmail.com" />    
            <FormInput title="Password" placeholder="********"  secureTextEntry={true} />            
             <FormButtonSubmit title="Login" />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        // justifyContent: 'center',
        // alignItems: 'center', 
        width: Dimensions.get('window').width,
        paddingHorizontal: 30,
        marginTop: 40,
   
    },
    title:{
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 2,

    },
    textInput:{
        borderWidth: 1,
        borderColor:'#194D33',
        width: "100%",
        height: 35,
        fontSize: 16,
        borderRadius: 8,
        paddingLeft: 10

    }
})