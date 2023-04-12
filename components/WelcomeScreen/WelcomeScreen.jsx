import React from "react";
import { View, Image, Text, Alert, Pressable } from "react-native";
//import QuizzScreen from '../QuizzScreen/QuizScreen.jsx'
import s from './WelcomeScreen.module.css';

const WelcomeScreen = (navigation) => {
    const hlibniIstorii = require('../../assets/hlibni-storii.png');

    return (
        <View>
            <Image style={s.image} source={hlibniIstorii}>
            </Image>
            <Text style={s.text}>Асортимент продукції</Text>
            <Pressable style={s.button} onPress={() => Alert.alert('Розпочато')}>
                <Text style={s.buttonText}>Розпочати</Text>
            </Pressable>
        </View>
    )
}

export default WelcomeScreen;