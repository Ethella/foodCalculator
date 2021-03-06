import React, {Component} from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { styles } from './style';
import { Divider } from "react-native-elements";
import FoodList from "../../../components/FoodList/FoodList";
import {getItem} from "../../../libs/AsyncSotrageWrapper";
import _ from 'lodash';

export default class MainScreen extends Component {

    state = {
        foodList: []
    };

    componentDidMount() {
        this.loadFoodList();
    }

    loadFoodList = async () => {
       const foodList = await getItem('todayFoodList');
       this.setState({ foodList })
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.remainContainer}>
                    <View style={styles.remainingTitles}>
                        <Text style={styles.title}>Protein</Text>
                        <Text style={styles.title}>Carbs</Text>
                        <Text style={styles.title}>Fat</Text>
                    </View>
                    <View style={styles.remainingNumber}>
                        <Text style={styles.title}>256.50</Text>
                        <Text style={styles.title}>76.95</Text>
                        <Text style={styles.title}>51.30</Text></View>
                </View>
                <Divider/>
                <View style={styles.todayFoodList}>
                    <Text>
                    Today
                    </Text>
                        <FoodList
                            data={this.state.foodList}
                            navigate={_.noop}
                        />


                </View>
            </ScrollView>
        );
}
}

MainScreen.navigationOptions = {
    title: 'Today',
};

