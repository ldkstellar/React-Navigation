import React from "react";
import {View ,Text, Button} from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParam } from "../App";
type Props = NativeStackScreenProps<RootStackParam ,'TabA'>

export class TabA extends React.Component<Props>{
    render(): React.ReactNode {
        return(
            <View style={{flex:1 , alignItems:"center", justifyContent:"center"}}>
                <Text>이것은 TabA 입니다.</Text>
                <Button title="Tab B로 이동하기" onPress={()=>{this.props.navigation.navigate('TabB')}}/>
                <Button title="Tab C로 이동하기" onPress={()=>{this.props.navigation.navigate('Nested')}}/>
            </View>

        )
        
    }
}