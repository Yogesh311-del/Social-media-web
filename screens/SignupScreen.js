import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'



const MY_LOGO = 
'https://i.ibb.co/9qDC0Sb/logo-ac.png'

const SignupScreen = () => ( 
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: MY_LOGO, height: 100, width: 100}} />
      </View>
      <SignupForm />
    </View>
)

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            paddingTop: 50,
            paddingHorizontal: 12,
        },

        logoContainer: {
            alignItems: 'center',
            marginTop: 60,
        },
})

export default SignupScreen