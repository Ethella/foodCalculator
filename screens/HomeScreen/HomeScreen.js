import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
    TextInput,
  View,
} from 'react-native';
import { styles } from './style';
import FoodList from "../../components/FoodList/FoodList";

export default function HomeScreen() {



  return (
    <View style={styles.container}>
      <TextInput
          style={styles.foodInput}
          onChangeText={text => onChangeText()}
      />
      <FoodList/>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

