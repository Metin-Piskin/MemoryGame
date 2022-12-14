import React from 'react';
import { View, Text } from 'react-native';

import styles from './GameModalScore-style';

const GameScore = ({ score }) => {
    return (
        <View style={styles.scoretextcontainer}>
            <Text style={styles.modalscortext}>
                Score:
            </Text>
            <Text style={styles.modalscor}>
                {score}
            </Text>
        </View>
    )
}

export default GameScore;