import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
    Button,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { styles } from './style';
import _ from 'lodash';
import {foodDetail} from "../../../service/FDA/detail";
import FoodList from "../../../components/FoodList/FoodList";
import NutritionList from "../../../components/NutritionList/NutritionList";
import FoodSearchScreen from "../FoodSearchScreen/FoodSearchScreen";

export default class FoodDetailScreen extends Component {

    state = {
        food: {}
    };

    componentDidMount() {
        this.loadFoodDetail();
    }

    loadFoodDetail = async () => {

        const { navigation } = this.props;
        const foodId = navigation.getParam('foodId');
        try {
            const food = await foodDetail(foodId);
            this.setState({ food });

        } catch (err) {
            console.log(JSON.stringify(err));
        }



    };

    render() {

        const { navigation } = this.props;

        return (
            <SafeAreaView>
                <View style={styles.container}>
                         {_.isEmpty(this.state.food) ?
                             null :
                         <NutritionList
                             data={this.state.food.foodNutrients}
                         />}
                </View>
            </SafeAreaView>);
    }
}

FoodDetailScreen.navigationOptions = ({ navigation }) => ({
    title: 'Food',
    headerRight: <Button
            onPress={() => push()}
            title="Add"
        />
});
