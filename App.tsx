import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
//import { HomeScreen } from './src/Home';
import { NestedStackNavigation } from './src/NestedStackNavigator';
import { TabA } from './src/TabA';
import { TabB } from './src/TabB';
//import { TestScreen } from './src/Test';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { BottomTabNavigiation } from './src/BottomTabNavigator';
import {  TabC } from './src/TabC';
export type RootStackParam = {
  //TabA:any;
  TabA: any;
  TabB: undefined;
  Nested:undefined;
  //Test: { userId: string };
  //Nested:any;
 
};
const Stack = createNativeStackNavigator();
const bottom = createBottomTabNavigator();





 function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='NestedBottomTab' component={BottomTabNavigiation}/>
      <Stack.Screen name='TabB' component={TabB}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;


//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Test" component={TestScreen} />
//         <Stack.Screen name="Nested" component={NestedStackNavigation}/>
//                 {/* 추가 스크린은 여기에 계속해서 등록하면 됩니다. */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// function App (){
//   return(
//     <NavigationContainer>
//       <bottom.Navigator
//       screenOptions={
//         {
//           tabBarActiveTintColor: 'black',
//           tabBarInactiveTintColor: 'gray',
//         }
//       }>
//         <bottom.Screen name='TabA' component={TabA} options={{tabBarIcon:()=><AntDesign name="pluscircleo" size={24} color="black" />}}/>
//         <bottom.Screen name='Nested' component={NestedStackNavigation}/>
//       </bottom.Navigator>
//     </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen}/>
    //     <Stack.Screen name='Screen' component={ScreenC}/>{/** */}
    //   </Stack.Navigator>
    // </NavigationContainer>


