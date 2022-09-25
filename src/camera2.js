import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CameraApp_2({navigation}) {
  /*
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
      (async () => {
          const { cameraStatus } = await requestPermission();
          setHasCameraPermission(cameraStatus === 'granted');
          console.log(`cameraStatus = ${cameraStatus}`);
          //const cameraStatus = await Camera.requestPermissionsAsync();
          //setHasCameraPermission(cameraStatus.status === 'granted');
  })();
    }, []);
  */
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState({
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    });
    const [image, setImage] = useState(null);

    //if (!permission) ... 
    //if (!permission.granted) ... 

    useEffect(() => {
        async function cameraPermissions() {
            const { status } = await requestPermission(); //Permissions.askAsync(Permissions.CAMERA);
            //const status = await requestPermission();
        
            setCamera(prevState => ({ ...prevState, hasCameraPermission: status === 'granted'}));
        }
        cameraPermissions();        
    }, []);
  

  const takePicture = async () => {
      if(camera){
          const data = await camera.takePictureAsync(null)
          setImage(data.uri);
          console.log('Just took a picture!');
      }
    }

  /*
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  */

  if (null === camera.hasCameraPermission) {
    return <Text>Request for camera permissions returned a null or undefined.</Text>;
  } else if (false === camera.hasCameraPermission) {
    return <Text>No access to camera.</Text>;
  } 

  return (
   <View style={{ flex: 1}}>
        <View style={styles.cameraContainer}>
            {/*!image && */ 
            <View style={{flex:1}}>          
              <Camera 
                ref={ref => setCamera(ref)}
                style={styles.fixedRatio} 
                type={type}
                ratio={'1:1'} />          
            </View>} 
    
            {image && 
            <View style={{flex:1}}>
                <Image source={{uri: image}} style={{flex:1}}/>
            </View>}
        </View>
        
        {/* CAMERA BUTTONS */}
        {/* 
        <View>
            <Button style={styles.buttonCamera} title="GPS" onPress={() => {navigation.navigate('GPS')}} />
        </View>
        */}
        <View style={{ flexDirection:"row" }}>
            <View  style={{flex:1}}>          
                <Button style={styles.buttonCamera} title="Flip Camera"
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                </Button>
            </View>

            <View  style={{flex:1}}>
                <Button style={styles.buttonCamera} title="Take Picture" onPress={() => {takePicture()}} />
            </View>  

            <View  style={{flex:1}}>
                <Button style={styles.buttonCamera} title="Delete" onPress={() => {setImage(null)}} />
            </View>        
        </View>
        
    </View>
    );
}
const styles = StyleSheet.create({
  cameraContainer: {
      flex: 1,
      flexDirection: 'column'
  },
  fixedRatio:{
      flex: 1,
      aspectRatio: 1
  }
})