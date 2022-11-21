import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StartPage = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#0f172a'} />
            <View style={styles.innercontainer}>
                <MaterialCommunityIcons
                    name='memory'
                    color={'#fff'}
                    size={200}
                />
                <Text style={{
                    fontSize: 32,
                    color: '#fff',
                    fontFamily: 'PressStart2P-Regular'
                }}>
                    Memory Game
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('GamePage')}
                style={styles.modalbutton}
            >
                <FontAwesome5
                    name='play'
                    color={'#fff'}
                    size={58}
                />
            </TouchableOpacity>
        </View>
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
        fontFamily: 'Ultra'
    },
    modalbutton: {
        width: 330,
        height: 120,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 10,
        borderColor: '#334155'
    }
})