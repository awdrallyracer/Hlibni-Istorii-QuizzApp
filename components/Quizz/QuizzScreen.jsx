import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, Pressable } from "react-native";
import s from './QuizzScreen.module.css';
import { useNavigation } from "@react-navigation/native";
import questions from "../../data/questions"
import { AntDesign } from '@expo/vector-icons';
import { background } from "../../data/images";

const QuizzScreen = () => {

  const navigation = useNavigation();

  const data = questions;
  const totalQuestions = data.length;

  const [buttonBackPressed, setButtonBackPressed] = useState(false)

  const [points, setPoints] = useState(0);

  const [index, setIndex] = useState(0);

  const [answerStatus, setAnswerStatus] = useState(null);

  const [answers, setAnswers] = useState([]);

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [counter, setCounter] = useState(15);

  let interval = null;

  const pressButtonBack = () => {
    setButtonBackPressed(true);
  };

  useEffect(() => {
    if (buttonBackPressed) {
      navigation.navigate("WelcomeScreen");
      setTimeout(() => setButtonBackPressed(false), 100);
    }
  }, [buttonBackPressed, navigation]);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("Result", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];

  return (
    <SafeAreaView style={s.background2}>
      {/* <Image style={s.background} source={background}></Image> */}
      <Pressable style={buttonBackPressed ? s.buttonBackActive : s.buttonBack} onPress={() => pressButtonBack()}>
        <Text style={s.textBack}> Повернутися на головну</Text>
      </Pressable>
      <View style={s.view}>
        <Text style={s.mainText}>Таймер:</Text>
        <Pressable >
          <Text style={s.timer}>{counter} секунд</Text>
        </Pressable>
      </View>

      <View style={s.view}>
        <Text style={s.mainText}>Ваш прогрес:</Text>
        <Text style={s.mainText}>(Відповіді {index}/{totalQuestions})</Text>
      </View>

      <View style={s.question}>
        <Text style={s.questionText}>{currentQuestion?.question}</Text>
        <Image source={currentQuestion?.image} style={s.image} />
      </View>

      <View>
        {currentQuestion?.options.map((item, index) => (
          <Pressable
            onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(index)}
            style={selectedAnswerIndex === index
              && index === currentQuestion.correctAnswerIndex
              ? style = s.choicesTrue
              : selectedAnswerIndex !== null
                && selectedAnswerIndex === index
                ? style = s.choicesFalse
                : style = s.choices}>

            {selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex ? (
              <AntDesign style={s.choicesLetter} name="check" size={20} color="black" />
            ) : selectedAnswerIndex != null &&
              selectedAnswerIndex === index ? (
              <AntDesign style={s.choicesLetter} name="closecircle" size={20} color="black" />
            ) : (
              <Text style={s.choicesLetter}> {item.letter} </Text>)}
            <Text style={s.choicesText} >{item.answer}</Text>
          </Pressable>
        ))}
      </View>

      <View
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 12, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Правильна відповідь" : "Неправильна відповідь"}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Result", {
                points: points,
                answers: answers,
              })
            }
            style={s.submitButton}>
            <Text style={s.submitText}>Завершити</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={s.submitButton}>
            <Text style={s.submitText}>Наступне питання</Text>
          </Pressable>
        )}
      </View>

    </SafeAreaView>
  )
}

export default QuizzScreen;