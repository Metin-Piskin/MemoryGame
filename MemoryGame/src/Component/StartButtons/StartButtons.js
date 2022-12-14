import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './StartButtons-style';

const StartButtons = ({ title, index, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            key={index}
        >
            <LinearGradient
                style={styles.modalbutton}
                colors={[
                    '#1e293b',
                    '#1e293b',
                    '#334155',
                    '#334155',
                ]}
            >
                <Text style={styles.text}>{title.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default StartButtons;