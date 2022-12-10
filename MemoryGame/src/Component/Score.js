import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Score = ({ post }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textName}>{post.name}</Text>
            <Text style={styles.textDifficulty}>{post.difficulty}</Text>
            <Text style={styles.textScore}>{post.score}</Text>
        </View>
    )
}

export default Score;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textName: {
        width: 138,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
    textDifficulty: {
        width: 165,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
    textScore: {
        width: 89,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
})