import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabA } from "./TabA";
import { NestedStackNavigation } from "./NestedStackNavigator";

const BottomTab = createBottomTabNavigator();

export class BottomTabNavigiation extends React.Component{
    render(): React.ReactNode {
        return(
            <BottomTab.Navigator>
                <BottomTab.Screen name="TabA" component={TabA} />
                <BottomTab.Screen name="Nested" component={NestedStackNavigation} />
            </BottomTab.Navigator>    
        )
    }
}