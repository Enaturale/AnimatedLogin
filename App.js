import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import FormHeader from './src/Components/FormHeader';
import FormButton from './src/Components/FormButton';
import LoginForm from './src/Components/LoginForm';
import SignupForm from './src/Components/SignupForm';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: '25%' }}>
      <FormHeader
        leftHeading='Welcome'
        rightHeading='Back'
        subHeading='Daily Task Manager'
      />
      {/* Buttons Login and Signup */}
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, }}>
        <FormButton style={styles.borderLeft} backgroundColor="#194D33" title='Login' />
        <FormButton style={styles.borderRight} backgroundColor="rgba(27, 27, 51, 0.4)" title='Sign Up' />
      </View>

      {/* text input fields */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
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
