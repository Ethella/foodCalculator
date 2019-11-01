import React from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import _ from 'lodash';

function Item({ navigate, item }) {
    return (
        <TouchableOpacity onPress={() => navigate(item.fdcId)}>
            <View style={styles.item} >
                <Text style={styles.title}>{item.description}</Text>
                <Text style={styles.description}>{item.fdcId} {item.additionalDescriptions}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function FoodList(props) {

    return _.isEmpty(props.data) ?
        <View><Text>Empty List</Text></View> :
            <FlatList
                style={styles.container}
                data={props.data}
                renderItem={({ item }) => <Item
                    item={item}
                    navigate={props.navigate}
                />}
                keyExtractor={item => _.toString(item.fdcId)}
            />;
}


