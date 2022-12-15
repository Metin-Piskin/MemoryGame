import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from './StartScoreButton-style';

const StartScoreButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            testID={'start-score-button-touchableopacity'}
            style={styles.tablebutton}
        >
            <LinearGradient
                style={styles.table}
                testID={'start-score-button-lineargradient'}
                colors={[
                    '#1e293b',
                    '#1e293b',
                    '#334155',
                    '#334155',
                ]}
            >
                <FontAwesome5
                    name='table'
                    color={'#fff'}
                    size={30}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default StartScoreButton;