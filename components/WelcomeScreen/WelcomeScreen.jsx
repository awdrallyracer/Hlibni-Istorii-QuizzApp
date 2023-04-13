import React from "react";
import { Image, Text, Pressable, SafeAreaView } from "react-native";
import s from './WelcomeScreen.module.css';
import { useNavigation } from "@react-navigation/native";
import { hlibniIstorii } from "../../data/images";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Image style={s.image} source={hlibniIstorii}>
            </Image>
            <Text style={s.text}>Асортимент продукції</Text>
            <Pressable style={s.button} onPress={() => navigation.navigate("Quizz")}>
                <Text style={s.buttonText}>Розпочати</Text>
            </Pressable>
            <Pressable style={s.button} onPress={() => navigation.navigate("Products")}>
                <Text style={s.buttonText}>Асортимент</Text>
            </Pressable>
        </SafeAreaView>
    )
}

//{({ isActive }) => isActive ? s.activeLink : undefined}

export default WelcomeScreen;