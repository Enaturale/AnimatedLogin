import { View, Text, StyleSheet, Animated } from 'react-native'
import React from 'react'

export default function FormHeader({leftHeading, rightHeading, subHeading, 
    leftHeaderTranslateX = 40, rightHeaderTranslateY = -20, rightHeaderOpacity = 0}) {
    return (
        <View style={Styles.container}>
            <View style={Styles.headingContainer}>
                <Animated.Text 
                   style={[Styles.heading, {transform:[{translateX: leftHeaderTranslateX}]}]}>{leftHeading} </Animated.Text>
                <Animated.Text style={[Styles.heading, {opacity: rightHeaderOpacity, transform:[{translateY: rightHeaderTranslateY}]}]}>{rightHeading}</Animated.Text>
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