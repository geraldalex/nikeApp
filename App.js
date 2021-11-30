
import React from 'react';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {Home} from "./src/screens/"
import {COLORS, FONTS, SIZES, icons} from './src/constants/'
import { useFonts } from 'expo-font'
import { TouchableOpacity, Image } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}

const Stack = createNativeStackNavigator()

const App = () => {

  const [loaded] = useFonts({
      
      
    "CarmenSans-Regular": require('./src/assets/fonts/CarmenSans-Regular.otf'),
    "CarmenSans-SemiBold": require('./src/assets/fonts/CarmenSans-SemiBold.otf'),
    "CarmenSans-Thin": require('./src/assets/fonts/CarmenSans-Thin.otf'),
    "CocoGothic-Bold": require('./src/assets/fonts/CocoGothic-Bold.ttf'),
    "CocoGothic": require('./src/assets/fonts/CocoGothic.ttf'),

   
  });
  
  if (!loaded) {
    return null;
  }
  return(
<NavigationContainer>
  <Stack.Navigator
  initialRouteName='Home'

  >
<Stack.Screen 
name="Home"
component={Home}
options={{
  title: 'SHOE SELECTOR',
  headerTitleAlign: 'center',
  headerTintColor:COLORS.lightGray,
  headerTitleStyle: {
    ...FONTS.navTitle, 
  },
  
  headerLeft:({onPress}) => (
    <TouchableOpacity
    style={{
     // marginLeft:SIZES.padding
    }}
    onPress={onPress}
    >
      <Image
      source={icons.menu}
resizeMode='contain'
style={{
width:25,
height:25
}}
/>


      </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity
    style={{
      //marginRight:SIZES.padding
    }}
    onPress={() => console.log("Header right on pressed")}
    >
<Image
source={icons.search}
resizeMode='contain'
style={{
  width:25,
  height:25
}}
/>

      </TouchableOpacity>
  )
}}

/>
  </Stack.Navigator>
</NavigationContainer>
  )
}



export default () => {
  return <App />
}