import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './StartButtons-style';

const StartButtons = ({ title, index, onPress }) => {
    return (
        <TouchableOpacity
            testID={'start-buttons-TouchableOpacity'}
            onPress={onPress}
            key={index}
        >
            <LinearGradient
                style={styles.modalbutton}
                testID={'start-buttons-LinearGradient'}
                colors={[
                    '#1e293b',
                    '#1e293b',
                    '#334155',
                    '#334155',
                ]}
            >
                {
                    title ? (
                        <Text style={styles.text} testID={'start-buttons-title'}>
                            {title}
                        </Text>
                    ) : (
                        <Text style={styles.text}>
                            Buttons
                        </Text>
                    )
                }
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default StartButtons;