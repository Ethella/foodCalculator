import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
    TextInput,
    SafeAreaView,
  View,
} from 'react-native';
import { styles } from './style';
import FoodList from "../../components/FoodList/FoodList";
import {searchFood} from "../../service/FDA/search";
import _ from 'lodash';

export default class HomeScreen extends Component {

    state = {
       searchResultList: [],
        selectedFoodList: []
    };


    onChangeText = async(text) => {
        try{
            const { foods } = await searchFood(text);
            this.setState({ searchResultList: foods });
        } catch (err) {
            console.log(JSON.stringify(err));
        }
    };

    handleInputThrottled = _.throttle(this.onChangeText, 500);

  render() {

      return (
          <SafeAreaView>
            <View style={styles.container}>
              <TextInput
                  style={styles.foodInput}
                  onChangeText={text => this.handleInputThrottled(text)}
              />
              <FoodList
                  data={this.state.searchResultList}/>
            </View>
          </SafeAreaView>);
    }
}

HomeScreen.navigationOptions = {
  header: null,
};

