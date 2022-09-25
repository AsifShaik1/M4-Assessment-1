import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from "./styles"
import iconn from "../assets/iconn.png"

function ForgotLoginScreen({ navigation }) {
    const [userName, onChangeUserName] = React.useState(null);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image source={iconn} style={{width: 150, height: 150, marginBottom: 30}} />

            
            <Text style={styles.credentials}> Your password will be emailed to you. Please enter your email address: </Text>
            
            <TextInput style={[styles.credentials, styles.CredentialsInput]}  onChangeText={onChangeUserName} value={userName}  placeholder="Email Address" /> 

            <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Home')}> 
                <Text style={styles.buttonText}> Request Password </Text>     
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ForgotLoginScreen

