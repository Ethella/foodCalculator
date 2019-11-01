import React from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
import _ from 'lodash';

function Item({ item }) {
    console.log(item);
    return (
            <View style={styles.item} >
                <Text style={styles.title}>{item.nutrient.name}</Text>
                <Text style={styles.description}>{item.amount || 0}{item.nutrient.unitName}</Text>
            </View>
    );
}

export default function NutritionList(props) {

    const data = _.map(props.data, (o) => {
        if (_.includes(o.nutrient.name, 'Carb') || _.includes(o.nutrient.name, 'Protein') || _.includes(o.nutrient.name, 'fat')) {
            o.newIndex = 0;
        } else {
            o.newIndex = 1;
        }
        return o;
    });

    const sortedData = _.orderBy(data, ['newIndex']);


    return _.isEmpty(props.data) ?
        <View><Text>Empty List</Text></View> :
        <FlatList
            style={styles.container}
            data={sortedData}
            renderItem={({ item }) => <Item
                item={item}
            />}
            keyExtractor={item => _.toString(item.nutrient.id)}
        />;
}


