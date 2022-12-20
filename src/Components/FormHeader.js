import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FormHeader({leftHeading, rightHeading, subHeading}) {
    return (
        <View style={Styles.container}>
            <View style={Styles.headingContainer}>
                <Text style={Styles.heading}>{leftHeading} </Text>
                <Text style={Styles.heading}>{rightHeading}</Text>
            </View>
            <Text style={Styles.subheading}>{subHeading}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: 100,

    },
    headingContainer: {
        flexDirection: 'row', justifyContent: 'center'
    },
    heading: {
        fontSize: 25, fontWeight: 'bold'
    },
    subheading: {
        fontSize: 18, fontWeight: 'italic', textAlign: 'center'
    }
})