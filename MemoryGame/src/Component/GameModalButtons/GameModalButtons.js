import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './GameModalButtons-style';

const GameModalButtons = ({ onPress, iconName }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
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
                <FontAwesome
                    name={iconName}
                    color={'#fff'}
                    size={35}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GameModalButtons;