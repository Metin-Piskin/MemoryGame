import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './Score-style';

const Score = ({ post }) => {
    return (
        <View style={styles.container} testID={'score-container'}>
            <Text style={styles.textName} testID={'score-textName'}>{post.name}</Text>
            <Text style={styles.textDifficulty} testID={'score-textDifficulty'}>{post.difficulty}</Text>
            <Text style={styles.textScore} testID={'score-textScore'}>{post.score}</Text>
        </View>
    )
}

export default Score;