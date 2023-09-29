import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = () => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password : Yup.string()
        .required()
        .min(6, 'Your password has to have at least 6 characters'),
})
}

export default SignupForm