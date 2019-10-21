import React from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import _ from 'lodash';
function Item({ navigateToDetail, item }) {
    return (
        <TouchableOpacity onPress={navigateToDetail}>
            <View style={styles.item} >
                <Text style={styles.title}>{item.description}</Text>
                <Text style={styles.description}>{item.fdcId} {item.additionalDescriptions}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function FoodList(props) {
    return (
            <FlatList
                style={styles.container}
                data={props.data}
                renderItem={({ item }) => <Item
                    item={item}
                    navigateToDetail={props.navigateToDetail}
                />}
                keyExtractor={item => _.toString(item.fdcId)}
            />
    );
}


