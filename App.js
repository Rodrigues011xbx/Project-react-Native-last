import 'react-native-gesture-handler'
import Login from './src/pages/login'
import MpApp from './src/pages/Mp-app'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Área de login">
          <Stack.Screen name="Área de login" component={Login}/>
          <Stack.Screen name="Aplicativo" component={MpApp}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  )
}