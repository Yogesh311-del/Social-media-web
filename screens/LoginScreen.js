import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'


const MY_LOGO = 
'https://i.ibb.co/9qDC0Sb/logo-ac.png'

const LoginScreen = () => ( 
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: MY_LOGO, height: 100, width: 100}} />
      </View>
      <LoginForm />
    </View>
)

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            paddingTop: 50,
            paddingHorizontal: 12,
        },

        logoContainer: {
            alignItems: 'center',
            marginTop: 60,
        },
})

export default LoginScreen