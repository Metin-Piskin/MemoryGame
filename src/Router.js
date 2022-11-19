import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stact = createNativeStackNavigator();

import GamePage from './Page/GamePage';
import ScorePage from './Page/ScorePage';

const Router = () => {
    return (
        <NavigationContainer>
            <Stact.Navigator screenOptions={{ headerShown: false }}>
                <Stact.Screen name='GamePage' component={GamePage} />
                <Stact.Screen name='ScorePage' component={ScorePage} />
            </Stact.Navigator>
        </NavigationContainer>
    )
}

export default Router;