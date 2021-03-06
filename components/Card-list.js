import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Card from './Card';
import Images from "../data/images";

export default function Cardlist() {
    return <FlatList
                contentContainerStyle={styles.containerFlat}
                data={Images}
                renderItem={ ({ item, index }) => <Card key={index} img={item} /> }
            />

}

const styles = StyleSheet.create({
    containerFlat: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
})
