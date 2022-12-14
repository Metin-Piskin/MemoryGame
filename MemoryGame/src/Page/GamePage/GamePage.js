import React, { useEffect, useState } from 'react';
import { StatusBar, View, Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';

import styles from './GamePage-style';

import Card from '../../Component/Card';
import GameScore from '../../Component/GameScore';
import GameModalScore from '../../Component/GameModalScore';
import GameModalInput from '../../Component/GameModalInput';
import GameModalButtons from '../../Component/GameModalButtons';

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
        name: Yup.string().max(10, 'Caption has Reached the character limit.')
    });

    const uploadPostToFirebase = (name) => {
        const unsubscribe = firestore()
            .collection(`table`)
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
            <GameScore
                onPress={() => navigation.navigate('StartPage')}
                score={score}
                text={text}
            />
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
                                <View style={styles.modalcontainer}>
                                    <GameModalScore score={score} />
                                    <View
                                        style={
                                            {
                                                borderBottomWidth: 1,
                                                borderColor:
                                                    values.name.length <= 10
                                                        ? '#334155'
                                                        : '#FF0000',
                                            }
                                        }
                                    >
                                        <GameModalInput
                                            placeholder='Name'
                                            placeholderTextColor={'#0f172a'}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            textContentType={'name'}
                                            value={values.name}
                                        />
                                    </View>
                                    <View style={styles.modalbuttoncontainer}>
                                        <GameModalButtons
                                            onPress={resetGame}
                                            iconName={'repeat'}
                                        />
                                        <GameModalButtons
                                            onPress={handleSubmit}
                                            iconName={'save'}
                                        />
                                    </View>
                                </View>
                            </Modal >
                        )}
                    </Formik>
                </View>
            }
        </View >
    )
}

export default App;