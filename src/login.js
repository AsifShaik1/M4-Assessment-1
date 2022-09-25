import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, TextInput, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from "./styles"
import iconn from "../assets/iconn.png"

function LoginScreen({ navigation }) {
    const [userName, onChangeUserName] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image source={iconn} style={{width: 140, height: 140, marginBottom: 30}} />

            
            {//<Text style={styles.credentials}> User Name: </Text>
            }
            <TextInput style={[styles.credentials, styles.CredentialsInput]}  onChangeText={onChangeUserName} value={userName}  placeholder="User Name" /> 

            {//<Text style={styles.credentials}> Password: </Text>
            }
            <TextInput style={[styles.credentials, styles.CredentialsInput]}  onChangeText={onChangePassword} value={password}   placeholder="Password"/> 
            
            <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Home')}> 
                <Text style={styles.buttonText}> Login </Text>     
            </TouchableOpacity>

            <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Forgot Login')}> 
                <Text style={styles.buttonText}> Forgot Login </Text>     
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default LoginScreen

