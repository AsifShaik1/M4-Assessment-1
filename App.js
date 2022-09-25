import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from "./src/styles"
import LoginScreen from './src/login';
import ForgotLoginScreen from './src/forgotLogin';
import HomeScreen from './src/home';
import NewMemoryScreen from './src/newMemory';
import MemoriesScreen from './src/memories';
import CameraApp from './src/camera';
import CameraApp_2 from './src/camera2';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Forgot Login' component={ForgotLoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Camera 1' component={CameraApp} />
        <Stack.Screen name='Camera' component={CameraApp_2} />
        <Stack.Screen name='GPS' component={NewMemoryScreen} />
        <Stack.Screen name='Memories' component={MemoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
