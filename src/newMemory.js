import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, TouchableOpacity, Image, Text, Button, TextInput, View, SafeAreaView, FlatList, Dimensions } from 'react-native';
//import MapView from 'react-native-maps';
import MapView, { Marker } from 'react-native-maps';
import React, { useState, useEffect, Component } from 'react';
import * as Location from 'expo-location';
import { Camera, CameraType } from 'expo-camera';


import styles from "./styles";


function getInitialRegion() {
  return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
};

function getRegion(loc) {
  return {
      latitude: loc['coords']['latitude'],
      longitude: loc['coords']['longitude'],
      latitudeDelta: 0.015,
      longitudeDelta: 0.005,
    }
};

function NewMemoryScreen({ navigation }) {
  
  const [title, onChangeTitle] = useState(null);
  const [description, onChangeDesc] = useState(null);
  
  //GPS
  const [hasGPSPermission, setGPSPermission] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [myCoords, setMyCoords] = useState([]);
  const [myRegion, setMyRegion] = useState(getInitialRegion());
  //CAMERA
  ///const [hasCameraPermission, setHasCameraPermission] = useState(null);
  //const [camera, setCamera] = useState(null);
  //const [image, setImage] = useState(null);
  //const [type, setType] = useState(Camera.Constants.Type.back);
  //const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      //GPS
      const { status } = await Location.requestForegroundPermissionsAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
      setGPSPermission(status === 'granted'); 
      if (status !== 'granted') {
        setErrorMsg('status =' + status + ', did not get permission to access location.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMyCoords([location]);
      setMyRegion(getRegion(location));

      //CAMERA
      //const { cameraStatus } = await requestPermission();
      //setHasCameraPermission(cameraStatus === 'granted');

    })();
  }, []);

  /*
  const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }
  */

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  };
  text = 'Mapping control working, with automatic zoom to your current location, using the correct region. Give it a minute or 2 while it gets your coordinates.';
  /*
  if (false === hasGPSPermission && false === hasCameraPermission) {
    return <Text>No access to GPS and Camera</Text>;
  } else if (false === hasCameraPermission) {
    return <Text>No access to Camera</Text>;
  } else if (false === hasGPSPermission) {
    return <Text>No access to GPS</Text>;
  }
  */

  /* 
  { 
    <TextInput style={[styles.credentials, styles.memoryTitle]}  onChangeText={onChangeTitle} value={title}  placeholder="Title" />
    <TextInput style={[styles.credentials, styles.memoryDesc]}  onChangeText={onChangeDesc} value={description}  placeholder="Description" />
  }
  */

  return (
    <SafeAreaView >
      
      { <Text style={[styles.memoryDesc, {fontSize: 13, height: 80}]}>{text}</Text>  }
      <View style={{ flexDirection:"column" }}>
          {/* 
          <View>
              <Button style={styles.buttonCamera} title="Camera" onPress={() => {navigation.navigate('Camera')}} />
          </View>
          */}
          <View  style={{flex:1}}>
              <MapView initialRegion={myRegion} region={myRegion} style={styles.map}>       
                {myCoords.map((val, index) => {
                  //Printing to the console
                  console.log(val)
                  return (<MapView.Marker
                      coordinate={{
                        latitude: val['coords']['latitude'],
                        longitude: val['coords']['longitude']
                      }}
                      key={index}
                      title = {"You are here!"}
                  />); 
                  })
                }
              </MapView>
          </View>
      </View>
      { /*<Text style={[styles.memoryDesc, {height: 150}]}>{text}</Text> */ }
      

    </SafeAreaView>
  );
}

export default NewMemoryScreen