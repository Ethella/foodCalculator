import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { styles } from './style';

function Item({item}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.description}</Text>
            <Text style={styles.description}>{item.fdcId} {item.additionalDescriptions}</Text>
        </View>
    );
}

export default function FoodList(props) {
    return (
            <FlatList
                style={styles.container}
                data={props.data}
                renderItem={({ item }) => <Item
                    item={item}
                />}
                keyExtractor={item => item.fdcId}
            />
    );
}


