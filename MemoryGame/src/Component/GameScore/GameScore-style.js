import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
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
        //borderWidth: 5,
        //borderColor: '#334155'
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
})