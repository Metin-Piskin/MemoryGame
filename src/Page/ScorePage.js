import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Score from '../Component/Score';

const ScorePage = ({ navigation }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firestore().collectionGroup('table')
            .onSnapshot(snapshot => {
                setPosts(snapshot?.docs.map(post => (
                    { id: post.id, ...post.data() })))
            })
    }, [])
    return (
        <>
            <ScrollView style={styles.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={'#0f172a'} />
                <View style={styles.innercontainer}>
                    <Text style={styles.text}>İndex</Text>
                    <Text style={styles.text}>Name</Text>
                    <Text style={styles.text}>Score</Text>
                </View>
                {posts.map((post, index) =>
                    <Score
                        key={index}
                        index={index}
                        post={post}
                    />
                )}
            </ScrollView>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StartPage')}
                    style={styles.button}
                >
                    <FontAwesome
                        name='home'
                        color={'#fff'}
                        size={35}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ScorePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
    },
    innercontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        flex: 1,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
        position: 'absolute',
        bottom: 20,
        right: 10
    },
    button: {
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