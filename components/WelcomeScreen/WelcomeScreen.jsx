import React from "react";
import { View, Image, Text } from "react-native";
import s from './WelcomeScreen.module.css';

const WelcomeScreen = () => {
    const hlibniIstorii = require('../../assets/hlibni-storii.png');

    return (
        <View>
            <Image style={s.image} source={hlibniIstorii}>
            </Image>
            <Text>Асортимент продукції</Text>
        </View>
    )
}

export default WelcomeScreen;