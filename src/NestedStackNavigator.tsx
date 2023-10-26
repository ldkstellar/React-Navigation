import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {  TabC } from "./TabC";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from '../App';

const Stack =  createNativeStackNavigator();


export class NestedStackNavigation extends React.Component{
render(): React.ReactNode {
  return(
    <Stack.Navigator>
        <Stack.Screen name="TabC" component={TabC}/>
    </Stack.Navigator>)
    }
}