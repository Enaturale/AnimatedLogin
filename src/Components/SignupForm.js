import React, { useState } from 'react'
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text } from 'react-native'
import FormButtonSubmit from './FormButtonSubmit'
import FormInput from './FormInput'
import { isValidObjField, isValidEmail, updateError } from '../utils/methods'


export default function SignupForm() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const [error, setError] = useState("")

    const { name, email, password, confirmpassword } = userInfo;

    const handleOnChangeText = (value, fieldname) => {
        //  console.log(value, fieldname)
        setUserInfo({ ...userInfo, [fieldname]: value })
    }

    //to validate the form
    const isValidForm = () => {
        //check if all values are entered
        if (!isValidObjField(userInfo))
            return updateError('All fields are required!', setError)

        //to check if the name is more than 3 characters
        if (!name.trim() || name.length < 3)
            return updateError('Name cannot be empty and should be more than 3 characters', setError)

        //to check for valid email
        if (!isValidEmail(email))
            return updateError('Invalid Email! ', setError)

        //to check if password is more than 8 xters
        if (!password.trim() || password.length < 8)
            return updateError('Password must be more than or equal to 8 characters', setError)

        //to check if password and confirm password is the same
        if (password !== confirmpassword)
            return updateError('Your passwords do not match', setError)

        return true;
    }

    const submitForm = () => {
        if (isValidForm()) {
            console.log(userInfo);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            {error ? <Text style={{color:'red', fontSize: 18, textAlign:'center'}}>{error}</Text> : null } 
            <FormInput
                value={name}
                onChangeText={(value) => handleOnChangeText(value, 'name')}
                title="Name"
                placeholder="John Doe" />
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
            <FormInput
                value={confirmpassword}
                onChangeText={(value) => handleOnChangeText(value, 'confirmpassword')}
                autoCapitalize="none"
                title="Confirm Password"
                placeholder="********"
                secureTextEntry={true} />
            <FormButtonSubmit title="Sign Up" onPress={submitForm} />
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