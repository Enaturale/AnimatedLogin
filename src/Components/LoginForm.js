import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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