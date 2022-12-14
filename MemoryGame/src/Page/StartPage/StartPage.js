import React from 'react';
import { StatusBar, View } from 'react-native';

import styles from './StartPage-style';

import StartHeader from '../../Component/StartHeader';
import StartButtons from '../../Component/StartButtons';
import StartScoreButton from '../../Component/StartScoreButton';

const title = [
    Easy = {
        text: 'Easy',
        icon: ["⚛️", "🥕", "🥑"]
    },
    Normal = {
        text: 'Normal',
        icon: ["🐷", "🪝", "⚛️", "🔑", "🥕", "🥑"]
    },
    Hard = {
        text: 'Hard',
        icon: ["🍑", "🌪️", "🌎", "🐷", "🪝", "⚛️", "🔑", "🥕", "🥑"]
    },
];

const StartPage = ({ navigation }) => {
    const StartPress = (icon, text) => {
        navigation.navigate("GamePage", { icon, text });
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#0f172a'} />
            <StartHeader />
            <View style={styles.buttoncontainer}>
                {
                    title.map((title, index) => {
                        return (
                            <StartButtons
                                index={index}
                                title={title}
                                onPress={() => StartPress(title.icon, title.text)}
                            />
                        );
                    })
                }
            </View>
            <StartScoreButton onPress={() => navigation.navigate('ScorePage')} />
        </View >
    )
}

export default StartPage;