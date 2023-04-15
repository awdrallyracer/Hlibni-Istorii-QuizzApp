import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import questions from "../../data/questions"
import s from './ProductList.module.css';
import { useNavigation } from "@react-navigation/native";

const ProductList = () => {

    const navigation = useNavigation();

    const [buttonWelcomePressed, setButtonWelcomePressed] = useState(false);

    const handlePress = () => {
        setButtonWelcomePressed(true);
    };

    useEffect(() => {
        if (buttonWelcomePressed) {
            navigation.navigate("WelcomeScreen");
            setTimeout(() => setButtonWelcomePressed(false), 100);
        }
    }, [buttonWelcomePressed, navigation]);


    const renderItem = ({ item }) => {
        return (
            <SafeAreaView style={s.view} >
                <Image source={item.image} style={s.image} />
                <FlatList
                    data={item.options}
                    renderItem={({ item }) => (
                        <View style={s.description} >
                            {item.isTrue ? <Text style={s.text} >{item.answer}</Text> : null}
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />

            </SafeAreaView>
        );
    };

    return (
        <SafeAreaView>
            <View>
                <Pressable style={buttonWelcomePressed ? s.buttonActive : s.button} onPress={handlePress}>
                    <Text style={s.header}> Повернутися на головну</Text>
                </Pressable>
            </View>
            <FlatList
                data={questions}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}>

            </FlatList>
        </SafeAreaView>
    );
};

export default ProductList;
