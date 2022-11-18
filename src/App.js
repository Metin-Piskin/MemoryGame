import React, { useEffect, useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const cards = [
    // "🥹",
    // "🗣️",
    // "🦷",
    // "🍑",
    // "🌪️",
    // "🌎",
    "🐷",
    "🪝",
    "⚛️",
    "🔑",
    "🥕",
    "🥑",
    // "👻",
    // "🥶",
    //"🥵",
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

const App = () => {
    const [board, setBoard] = useState(() => shuffle([...cards, ...cards]))
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (selectedCards.length < 2) return;
        if (board[selectedCards[0]] === board[selectedCards[1]]) {
            setMatchedCards([...matchedCards, ...selectedCards]);
            setSelectedCards([]);
        } else {
            const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [selectedCards]);

    const handleTabCard = (index) => {
        if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
        setSelectedCards([...selectedCards, index]);
        setScore(score + 1);
    }

    const didPlayerWin = () => {
        return (
            matchedCards.length === board.length
        );
    }

    const resetGame = () => {
        setMatchedCards([]);
        setScore(0);
        setSelectedCards([]);
        setBoard(shuffle([...cards, ...cards]))
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#0f172a'} />
            <Text style={styles.title}>
                {didPlayerWin() ? "Congratulations 🎉" : "Memory"}
            </Text>
            <Text style={styles.title}>Score: {score}</Text>
            <View style={styles.board}>
                {board.map((card, index) => {
                    const isTurnedOver = selectedCards.includes(index) || matchedCards.includes(index)
                    return (
                        <Card
                            key={index}
                            isTurnedOver={isTurnedOver}
                            onPress={() => handleTabCard(index)}
                        >
                            {card}
                        </Card>
                    )
                })}
            </View>
            {didPlayerWin() && <Button title='reset' onPress={resetGame} />}
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: '900'
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})