import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'


const stack = createStackNavigator() 

const screenOptions ={
    headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={screenOptions}
        >
            <stack.Screen name='HomeScreen' component={HomeScreen} />
            <stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <stack.Screen name='LoginScreen' component={LoginScreen} />
            <stack.Screen name='SignupScreen' component={SignupScreen} />

        </stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack