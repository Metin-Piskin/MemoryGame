import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <View style={styles.innercontainer}>
                <MaterialCommunityIcons
                    name='memory'
                    color={'#fff'}
                    size={200}
                />
                <Text style={styles.title}>
                    Memory Game
                </Text>
            </View>
            {
                title.map((title, index) => {
                    return (
                        <TouchableOpacity
                            onPress={() => StartPress(title.icon, title.text)}
                            style={styles.modalbutton}
                            key={index}
                        >
                            <Text style={styles.text}>{title.text}</Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View >
    )
}

export default StartPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    innercontainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontFamily: 'PressStart2P-Regular'
    },
    modalbutton: {
        width: 165,
        height: 60,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 10,
        borderColor: '#334155'
    },
    text: {
        color: '#fff',
        fontFamily: 'PressStart2P-Regular',
        paddingTop:5
    }
})