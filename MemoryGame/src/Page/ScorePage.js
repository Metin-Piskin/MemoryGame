import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Score from '../Component/Score';
import LinearGradient from 'react-native-linear-gradient';

const ScorePage = ({ navigation }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        firestore()
            .collection('table')
            .orderBy('score').onSnapshot(snapshot => {
                setPosts(snapshot?.docs.map(post => (
                    { ...post.data() })))
            });
        setLoading(false);
    }, [])

    //console.log(posts)
    if (loading) {
        return <Text>Data is loading...</Text>
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={'#0f172a'} />
                <View style={styles.innercontainer}>
                    <Text style={styles.textName}>Name</Text>
                    <Text style={styles.textDifficulty}>Difficulty</Text>
                    <Text style={styles.textScore}>Scor</Text>
                </View>

                {posts.map((post, index) => < Score post={post} key={index} />)}

            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate('StartPage')}
                style={styles.buttoncontainer}
            >
                <LinearGradient
                    style={styles.button}
                    colors={[
                        '#1e293b',
                        '#1e293b',
                        '#334155',
                        '#334155',
                    ]}
                >
                    <FontAwesome
                        name='home'
                        color={'#fff'}
                        size={28}
                    />
                </LinearGradient>
            </TouchableOpacity>
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
    textName: {
        paddingHorizontal: 40,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
    textDifficulty: {
        paddingHorizontal: 18,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
    textScore: {
        paddingHorizontal: 15,
        borderWidth: 1,
        fontFamily: 'PressStart2P-Regular',
        textAlign: 'center',
        textAlignVertical: 'bottom',
        paddingVertical: 10,
        color: '#fff',
        borderColor: '#fff'
    },
    buttoncontainer: {
        position: 'absolute',
        bottom: 20,
        left: 65
    },
    button: {
        width: 50,
        height: 50,
        margin: 10,
        backgroundColor: '#1e293b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        //borderWidth: 10,
        //borderColor: '#334155'
    }
})