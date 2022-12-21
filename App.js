import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Dimensions, Animated } from 'react-native';
import FormHeader from './src/Components/FormHeader';
import FormButton from './src/Components/FormButton';
import LoginForm from './src/Components/LoginForm';
import SignupForm from './src/Components/SignupForm';
import {useRef} from 'react'

const {width} = Dimensions.get('window')

export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  
  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0]
  })

  const leftHeaderTranslateX= animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40]
  })
 
  const rightHeaderTranslateY= animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20]
  })

  const loginColor= animation.interpolate({
    inputRange: [0, width],
    outputRange: ['#194D33', 'rgba(27, 27, 51, 0.4)']
  })

  const signupColor= animation.interpolate({
    inputRange: [0, width],
    outputRange: [ 'rgba(27, 27, 51, 0.4)','#194D33']
  })

  return (
    <View style={{ flex: 1, paddingTop: '25%' }}>
      <FormHeader
        leftHeading='Welcome'
        rightHeading='Back'
        subHeading='Daily Task Manager'
        rightHeaderOpacity={rightHeaderOpacity}
        leftHeaderTranslateX = {leftHeaderTranslateX}
        rightHeaderTranslateY={rightHeaderTranslateY}
      />
      {/* Buttons Login and Signup */}
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, }}>
      <FormButton style={styles.borderLeft} backgroundColor={loginColor} title='Login' />
        <FormButton style={styles.borderRight} backgroundColor={signupColor} title='Sign Up' />
      </View>

      {/* text input fields */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent:{contentOffset: {x: animation}}}], {useNativeDriver: false} )}
      >
        <LoginForm />
        
        <ScrollView>
          <SignupForm />
        </ScrollView>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  borderRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }
});
