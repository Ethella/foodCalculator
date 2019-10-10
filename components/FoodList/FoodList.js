import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { styles } from './style';
import { foodList } from '../../constants/food';

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default function FoodList() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={foodList}
                renderItem={({ item }) => <Item title={item.name} />}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    );
}


