import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const Card = ({ onPress, isTurnedOver, children }) => {
    return (
        <Pressable
            onPress={onPress}
            style={isTurnedOver ? styles.cardUp : styles.cardDown}
        >
            {isTurnedOver ? (
                <Text style={styles.text}>{children}</Text>
            ) : (
                <Text style={styles.text}>?</Text>
            )}
        </Pressable>
    )
}

export default Card;

const styles = StyleSheet.create({
    cardUp: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 10,
        borderColor: '#334155'
    },
    cardDown: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 10,
        borderColor: '#334155'
    },
    text: {
        fontSize: 46,
        color: '#334155'
    }
})