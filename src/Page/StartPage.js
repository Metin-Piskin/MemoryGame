import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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

            <View
                style={styles.innercontainer}
            >
                <LinearGradient
                    style={styles.LinearGradientcontainer}
                    colors={[
                        '#1e293b',
                        '#1e293b',
                        '#0f172a',
                        '#0f172a',
                    ]}
                >
                    <MaterialCommunityIcons
                        name='react'
                        color={'#fff'}
                        size={200}
                    />
                </LinearGradient>
                <Text style={styles.title}>
                    Memory Game
                </Text>
            </View>
            <View style={styles.buttoncontainer}>
                {
                    title.map((title, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => StartPress(title.icon, title.text)}
                                key={index}
                            >
                                <LinearGradient
                                    style={styles.modalbutton}
                                    colors={[
                                        '#1e293b',
                                        '#1e293b',
                                        '#334155',
                                        '#334155',
                                    ]}
                                >
                                    <Text style={styles.text}>{title.text}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('ScorePage')}
                style={styles.tablebutton}
            >
                <LinearGradient
                    style={styles.table}
                    colors={[
                        '#1e293b',
                        '#1e293b',
                        '#334155',
                        '#334155',
                    ]}
                >
                    <FontAwesome5
                        name='table'
                        color={'#fff'}
                        size={30}
                    />
                </LinearGradient>
            </TouchableOpacity>
        </View >
    )
}

export default StartPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    innercontainer: {
        alignItems: 'center',
        borderRadius: 20
    },
    LinearGradientcontainer: {
        padding: 20,
        borderRadius: 120
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontFamily: 'PressStart2P-Regular'
    },
    buttoncontainer: {

        alignItems: 'center',
        justifyContent: 'center'
    },
    modalbutton: {
        width: 165,
        paddingVertical: 10,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        //borderWidth: 10,
        //borderColor: '#334155'
    },
    text: {
        color: '#fff',
        fontFamily: 'PressStart2P-Regular',
        paddingTop: 5
    },
    tablebutton: {
        position: 'absolute',
        right: 30,
        bottom: 40
    },
    table: {
        padding: 10,
        borderRadius: 10
    }
})