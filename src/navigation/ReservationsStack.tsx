import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reservations from '../screens/Reservations';
import {screen} from '../utils'

const Stack = createNativeStackNavigator();

const ReservationsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name={screen.reservations.reservations} 
            component={Reservations} 
            options={{ title: "Reservations" }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
};

export default ReservationsStack;