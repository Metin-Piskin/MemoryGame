import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center'
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
    modalbuttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12
    },
})