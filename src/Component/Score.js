import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Score = ({ post, index }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{index + 1}</Text>
            <Text style={styles.text}>{post.name}</Text>
            <Text style={styles.text}>{post.score}</Text>
        </View>
    )
}

export default Score;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 5,
        color: '#fff',
        borderColor: '#fff'
    }
})