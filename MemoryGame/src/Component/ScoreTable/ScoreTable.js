import React from 'react';
import { View, Text } from 'react-native';

import styles from './ScoreTable-style';

const ScoreTable = () => {
    return (
        <View style={styles.innercontainer} testID='score-table-innercontainer'>
            <Text style={styles.textName} testID='score-table-textName'>Name</Text>
            <Text style={styles.textDifficulty} testID='score-table-textDifficulty'>Difficulty</Text>
            <Text style={styles.textScore} testID='score-table-textScore'>Scor</Text>
        </View>
    )
}

export default ScoreTable;