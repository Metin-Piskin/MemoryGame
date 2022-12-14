import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './GameScore-style';

const GameScore = ({ onPress, score, text }) => {
    return (
        <View style={styles.scorecontainer}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.buttoncontainer}
            >
                <LinearGradient
                    style={styles.button}
                    colors={[
                        '#1e293b',
                        '#1e293b',
                        '#334155',
                        '#334155',
                    ]}
                >
                    <FontAwesome
                        name='home'
                        color={'#fff'}
                        size={28}
                    />
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.scoretextcontainer}>
                <Text style={styles.title}>Score:</Text>
                <Text style={styles.num}>{score}</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default GameScore;