import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './StartHeader-style';

const StartHeader = () => {
    return (
        <View style={styles.innercontainer} testID={'start-header-container'}>
            <LinearGradient
                style={styles.LinearGradientcontainer}
                testID={'start-header-LinearGradientcontainer'}
                colors={[
                    '#1e293b',
                    '#1e293b',
                    '#0f172a',
                    '#0f172a',
                ]}
            >
                <MaterialCommunityIcons
                    name='react'
                    color={'#fff'}
                    size={200}
                />
            </LinearGradient>
            <Text style={styles.title} testID={'start-header-title'}>
                Memory Game
            </Text>
        </View>
    )
}

export default StartHeader;