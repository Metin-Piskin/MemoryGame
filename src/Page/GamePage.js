import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Modal, Dimensions, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';

import Card from '../Component/Card';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

const App = ({ navigation, route }) => {
    const { icon, text } = route.params;
    const [board, setBoard] = useState(() => shuffle([...icon, ...icon]))
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [modalVisible, setModalVisible] = useState(true);

    const uploadPostSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Caption has Reached the character limit.').max(7, 'Caption has Reached the character limit.')
    });

    const uploadPostToFirebase = (name) => {
        const unsubscribe = firestore()
            .collection('table')
            .add({
                name: name,
                score: score,
                difficulty: text
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
        setBoard(shuffle([...icon, ...icon]))
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#0f172a'} />
            <View style={styles.scorecontainer}>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('StartPage')}
                        style={styles.button}
                    >
                        <FontAwesome
                            name='home'
                            color={'#fff'}
                            size={28}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.scoretextcontainer}>
                    <Text style={styles.title}>Score:</Text>
                    <Text style={styles.num}>{score}</Text>
                </View>
                <Text style={styles.text}>{text}</Text>
            </View>
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
                <View style={styles.formikcontainer}>
                    <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
                    <Formik
                        initialValues={{ name: '' }}
                        onSubmit={(values) => {
                            uploadPostToFirebase(values.name)
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
                                    style={styles.modalcontainer}
                                >
                                    <Text style={styles.modalscortext}>
                                        Score: {score}
                                    </Text>

                                    <TextInput
                                        placeholder='Name'
                                        placeholderTextColor={'#0f172a'}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        style={styles.modalinput}
                                    />

                                    <View
                                        style={styles.modalbuttoncontainer}
                                    >
                                        <TouchableOpacity
                                            onPress={resetGame}
                                            style={styles.modalbutton}
                                        >
                                            <FontAwesome
                                                name='repeat'
                                                color={'#fff'}
                                                size={35}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={handleSubmit}
                                            style={styles.modalbutton}
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
    scorecontainer: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttoncontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#334155'
    },
    scoretextcontainer: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontFamily: 'PressStart2P-Regular',
        paddingVertical: 5
    },
    num: {
        fontSize: 30,
        color: '#FDBF5E',
        fontFamily: 'PressStart2P-Regular',
        paddingVertical: 5,
    },
    text: {
        color: '#fff',
        alignSelf: 'center'
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    formikcontainer: {
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        width: Dimensions.get('screen').width,
    },
    modalcontainer: {
        backgroundColor: 'white',
        padding: 16,
        marginHorizontal: 20,
        height: Dimensions.get('screen').height / 3,
        width: Dimensions.get('screen').width * 0.90,
        position: 'absolute',
        top: Dimensions.get('screen').width / 2,
        zIndex: 999,
        borderRadius: 20
    },
    modalscortext: {
        fontSize: 27,
        color: '#0f172a',
        fontFamily: 'PressStart2P-Regular'
    },
    modalinput: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderColor: '#334155',
        fontFamily: 'PressStart2P-Regular',
        justifyContent: 'center',
        textAlignVertical: 'bottom'
    },
    modalbuttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12
    },
    modalbutton: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 10,
        borderColor: '#334155'
    }
})