import React from 'react';
import { View, Text } from 'react-native';

import styles from './ScoreTable-style';

const ScoreTable = () => {
    return (
        <View style={styles.innercontainer}>
            <Text style={styles.textName}>Name</Text>
            <Text style={styles.textDifficulty}>Difficulty</Text>
            <Text style={styles.textScore}>Scor</Text>
        </View>
    )
}

export default ScoreTable;