import React, { useEffect, useState } from "react";
import { Image, Text, View, Pressable, SafeAreaView } from "react-native";
import s from './WelcomeScreen.module.css';
import { useNavigation } from "@react-navigation/native";
import { hlibniIstorii } from "../../data/images";

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const [buttonTestPressed, setButtonTestPressed] = useState(false);
    const [buttonProductPressed, setButtonProductPressed] = useState(false);

    const pressButtonTest = () => {
        setButtonTestPressed(true);
        navigation.navigate("Quizz");
    };

    const pressButtonProduct = () => {
        setButtonProductPressed(true);
        navigation.navigate("Products");
    };

    useEffect(() => {
        setTimeout(() => setButtonTestPressed(false), 100);
        setTimeout(() => setButtonProductPressed(false), 100);
    });

    return (
        <SafeAreaView>
            <View style={s.view}>
                <Image style={s.image} source={hlibniIstorii}>
                </Image>
            </View>
            <View>
                <Text style={s.text}>Асортимент продукції</Text>
            </View>
            <View style={s.buttonView}>
                <Pressable style={buttonTestPressed ? s.buttonActive : s.button} onPress={pressButtonTest}>
                    <Text style={s.buttonText}>Тест</Text>
                </Pressable>
                <Pressable style={buttonProductPressed ? s.buttonActive : s.button} onPress={pressButtonProduct}>
                    <Text style={s.buttonText}>Асортимент</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen;