import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './ScorePage-style';

import Score from '../../Component/Score';
import ScoreTable from '../../Component/ScoreTable';
import ScoreButton from '../../Component/ScoreButton';

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
                <ScoreTable />
                {posts.map((post, index) => < Score post={post} key={index} />)}
            </ScrollView>
            <ScoreButton onPress={() => navigation.navigate('StartPage')} />
        </>
    )
}

export default ScorePage;