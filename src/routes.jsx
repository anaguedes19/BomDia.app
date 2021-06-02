import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './screens/home/Home'
import {Status} from './screens/status/Status'
const Stack = createStackNavigator()

export function Routes() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='status' component={Status} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
