import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, View, Pressable, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import s from './ResultScreen.module.css';

const ResultScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  const [buttonPressed, setButtonPressed] = useState(false);

  const pressButton = () => {
    setButtonPressed(true);
  }

  useEffect(() => {
    if (buttonPressed) {
      navigation.navigate("WelcomeScreen");
      setTimeout(() => setButtonPressed(false), 100);
    }
  }, [buttonPressed, navigation]);

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <Pressable style={s.frame}>
        <Text style={s.headerText}> Відповіді </Text>
        <FlatList numColumns={1} data={route.params.answers} renderItem={({ item, i }) => (
          <View
            style={s.results}>
            <Text style={s.text}>{item.question}</Text>
            {item.answer === true ? (
              <AntDesign style={{ marginLeft: 5 }} name="checkcircle" size={25} color="green" />
            ) : (
              <AntDesign style={{ marginLeft: 5 }} name="closecircle" size={25} color="red" />
            )}
          </View>
        )}
        />

        <Pressable style={buttonPressed ? s.submitButtonActive : s.submitButton} onPress={pressButton}>
          <Text style={s.submitText}>Продовжити</Text>
        </Pressable>
      </Pressable>

    </SafeAreaView>
  );
};

export default ResultScreen;
