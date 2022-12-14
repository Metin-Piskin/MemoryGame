import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import styles from './ScoreButton-style';

const ScoreButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttoncontainer}
        >
            <LinearGradient
                style={styles.button}
                colors={[
                    '#1e293b',
                    '#1e293b',
                    '#334155',
                    '#334155',
                ]}
            >
                <FontAwesome
                    name='home'
                    color={'#fff'}
                    size={28}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default ScoreButton;