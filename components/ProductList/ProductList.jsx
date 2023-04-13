import React from 'react';
import { FlatList, SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import questions from "../../data/questions"
import s from './ProductList.module.css';
import { useNavigation } from "@react-navigation/native";

const ProductList = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <SafeAreaView style={s.view} >

                <View>
                    <Pressable onPress={() => navigation.navigate("WelcomeScreen")}>
                        <Text> Повернутися на головну</Text>
                    </Pressable>
                </View>
                
                <Image source={item.image} style={s.image} />
                <FlatList
                    data={item.options}
                    renderItem={({ item }) => (
                        <View>
                            {item.isTrue ? <Text style={s.text} >{item.answer}</Text> : null}
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        );
    };
    return (
        <FlatList
            data={questions}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}>

        </FlatList>

    );
};

export default ProductList;
