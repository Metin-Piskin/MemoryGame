import React, { useEffect, useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View, Modal, Alert, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';


import Card from '../Component/Card';

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

const App = ({ navigation }) => {
    const [board, setBoard] = useState(() => shuffle([...cards, ...cards]))
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);

    const uploadPostSchema = Yup.object().shape({
        name: Yup.string().max(15, 'Caption has Reached the character limit.')
    });

    const uploadPostToFirebase = (name, score) => {
        const unsubscribe = firestore()
            .collection('table')
            .add({
                name: name,
                score: score
            })
            .then(() => { navigation.navigate('ScorePage') })
        return unsubscribe
    }

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
            {
                didPlayerWin() &&
                <>
                    <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            zIndex: 999,
                            position: 'absolute',
                            height: '100%',
                            width: '100%'
                        }}
                    >
                        <Formik
                            initialValues={{ name: '', score: '' }}
                            onSubmit={(values) => {
                                uploadPostToFirebase(values.name, values.score)
                            }}
                            validationSchema={uploadPostSchema}
                            validateOnMount={true}
                        >
                            {({ handleBlur, handleChange, handleSubmit, values }) => (
                                < Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            backgroundColor: 'white',
                                            padding: 16,
                                            marginHorizontal: 20,
                                            height: Dimensions.get('screen').height / 3,
                                            width: Dimensions.get('screen').width * 0.90,
                                            position: 'absolute',
                                            bottom: Dimensions.get('screen').width / 1.5,
                                            zIndex: 999,
                                            borderRadius: 20
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 32,
                                                color: '#0f172a',
                                                fontWeight: '900'
                                            }}
                                        >
                                            Score: {score}
                                        </Text>
                                        <TextInput
                                            placeholder='Name'
                                            placeholderTextColor={'#0f172a'}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                            style={{
                                                borderBottomWidth: 1,
                                                justifyContent: 'center',
                                                borderColor: '#334155'
                                            }}
                                        />
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around'
                                            }}
                                        >

                                            <TouchableOpacity
                                                onPress={resetGame}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    margin: 10,
                                                    backgroundColor: '#1e293b',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 25,
                                                    borderWidth: 10,
                                                    borderColor: '#334155'
                                                }}
                                            >
                                                <FontAwesome
                                                    name='repeat'
                                                    color={'#fff'}
                                                    size={35}
                                                />
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={handleSubmit}
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    margin: 10,
                                                    backgroundColor: '#1e293b',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 25,
                                                    borderWidth: 10,
                                                    borderColor: '#334155'
                                                }}
                                            >
                                                <FontAwesome
                                                    name='save'
                                                    color={'#fff'}
                                                    size={35}
                                                />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </Modal >
                            )}
                        </Formik>
                    </View>
                </>
            }
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