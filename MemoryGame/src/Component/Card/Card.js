import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import styles from './Card-style';

const Card = ({ onPress, isTurnedOver, children }) => {
    return (
        <Pressable
            onPress={isTurnedOver ? null : onPress}
            style={isTurnedOver ? styles.cardUp : styles.cardDown}
            testID='card-pressable'
        >
            {isTurnedOver ? (
                <Text
                    style={styles.text}
                    testID='card-title'
                >
                    {children}
                </Text>
            ) : (
                <Text style={styles.text}>?</Text>
            )}
        </Pressable>
    )
}

export default Card;