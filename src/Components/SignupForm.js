import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import FormInput from './FormInput'
import FormButtonSubmit from './FormButtonSubmit'

export default function SignupForm() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <FormInput title="Name" placeholder="John Doe" />
            <FormInput title="Email" placeholder="example@gmail.com" />
            <FormInput title="Password" placeholder="********" secureTextEntry={true} />
            <FormInput title="Confirm Password" placeholder="********" secureTextEntry={true} />

            <FormButtonSubmit title="Sign Up" />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: Dimensions.get('window').width,
        paddingHorizontal: 30,
        marginTop: 40,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'

    }
})