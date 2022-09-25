import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
//import * as Permissions from 'expo-permissions';

export default function CameraApp() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState({
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    });

    //if (!permission) ... 
    //if (!permission.granted) ... 

    function toggleCameraType() {
      setType((current) => (
        current === CameraType.back ? CameraType.front : CameraType.back
      ));
    }

    useEffect(() => {
        async function cameraPermissions() {
            const { status } = await requestPermission(); //Permissions.askAsync(Permissions.CAMERA);
            //const status = await requestPermission();
        
            setCamera(prevState => ({ ...prevState, hasCameraPermission: status === 'granted'}));
        }
        cameraPermissions();        
    }, []);

    
    if (camera.hasCameraPermission === null) {
        return <View />;
    } else if (camera.hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    } else {
        return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={camera.type}>
            <View
                style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                }}>
                <TouchableOpacity
                style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                }}
                onPress={() => {
                setCamera({
                    type:
                        camera.type === Camera.Constants.Type.back? Camera.Constants.Type.front:Camera.Constants.Type.back,
                    });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}
                    Flip{' '}
                </Text>
                </TouchableOpacity>
            </View>
            </Camera>
        </View>
        )
    }
}
