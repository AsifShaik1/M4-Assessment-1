import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image, Text, View } from 'react-native'
import React, { Component } from 'react'

import styles from "./styles"
import iconn from "../assets/iconn.png"


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={iconn} style={styles.image}/>
      {/* 
      <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Camera')}> 
          <Text style={styles.buttonText}> Camera 1</Text>     
      </TouchableOpacity>
      */}

      <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Camera')}> 
          <Text style={styles.buttonText}> Camera </Text>     
      </TouchableOpacity>

      <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('GPS')}> 
          <Text style={styles.buttonText}> GPS </Text>     
      </TouchableOpacity>

      {/* 
      <TouchableOpacity style={[styles.credentials, styles.CredentialsInput, styles.button]} onPress={() => navigation.navigate('Memories')}> 
          <Text style={styles.buttonText}> View Memories </Text>     
      </TouchableOpacity>
      */}
    </View>
  );
}

export default HomeScreen