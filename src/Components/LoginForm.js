import { View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import FormInput from './FormInput'
import FormButtonSubmit from './FormButtonSubmit'

import { isValidEmail, isValidObjField, updateError } from '../utils/methods'


export default function LoginForm() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userInfo;
    const [error, setError] = useState('')

    const handleOnChangeText = (value, fieldname) => {
        //  console.log(value, fieldname)
        setUserInfo({ ...userInfo, [fieldname]: value })
    }

    const isValidForm = () => {
        if (!isValidObjField(userInfo))
            return updateError("All Fields are Required!", setError)

        if (isValidEmail(email))
            return updateError("Invalid Email!", setError)

        if (!password.trim() || password.length < 8)
            return updateError("Password is less than 8 characters", setError)

        return true;

    }

    const submitForm = () => {
        if (isValidForm()) {
            console.log(userInfo);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            {error ? <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>{error}</Text> : null}

            <FormInput
                value={email}
                onChangeText={(value) => handleOnChangeText(value, 'email')}
                autoCapitalize="none"
                title="Email"
                placeholder="example@gmail.com" />
            <FormInput
                value={password}
                onChangeText={(value) => handleOnChangeText(value, 'password')}
                autoCapitalize="none"
                title="Password"
                placeholder="********"
                secureTextEntry={true} />
            <FormButtonSubmit title="Login" onPress={submitForm} />
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
        paddingLeft: 10

    }
})