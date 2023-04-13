import React, { useEffect, useState } from "react";
import { View, Image, Text, SafeAreaView, Pressable } from "react-native";
import s from './QuizzScreen.module.css';
import { useNavigation } from "@react-navigation/native";
import questions from "../../data/questions"
import { AntDesign } from '@expo/vector-icons';

const QuizzScreen = () => {
    const navigation = useNavigation();

    const data = questions;
    const currentQuestion = data[0];
    const totalQuestions = data.length;

    //points
    const [points, setPoints] = useState(0);

    //index of the question
    const [index, setIndex] = useState(0);

    //answer status: true or false
    const [answerStatus, setAnswerStatus] = useState(null);

    //answers
    const [answers, setAnswers] = useState([]);

    //selected answer
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    //counter!!!!!!!!!!!
    const [counter, setCounter] = useState(15);

    //interval
    let interval = null;

    useEffect(() => {
        if (selectedAnswerIndex !== null) {
            if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
                setPoints((points) => points + 10);
                setAnswerStatus(true);
                answers.push({ questions: index + 1, answer: true })
            } else {
                setAnswerStatus(false);
                answers.push({ questions: index + 1, answer: false })
            }
        }
    }, [selectedAnswerIndex]);

    useEffect(() => {
        setSelectedAnswerIndex(null);
        setAnswerStatus(null);
    }, [currentQuestion]);

    useEffect(() => {
        const myInterval = () => {
            if (counter >= 1) {
                setCounter((counter) => counter - 1);
            }
            if (counter === 0) {
                setIndex(index + 1);
                setCounter(15);
            }
        }

        interval = setTimeout(myInterval, 1000)

        //cleanUp function
        return () => {
            clearTimeout(interval);
        };

    }, [counter]);

    useEffect(() => {
        if (index + 1 > data.length) {
            navigation.navigate("Result", {
                answers: answers,
                points: points
            })
        }
    }, [currentQuestion]);

    useEffect(() => {
        if (!interval) {
            setCounter(15);
        }
    }, [index])

    return (
        <SafeAreaView>
            <Pressable onPress={() => navigation.navigate("WelcomeScreen")}>
                <Text style={s.choicesText}> Повернутися на головну</Text>
            </Pressable>
            <View style={s.view}>
                <Text style={s.choicesText}>Quizz Challange</Text>
                <Pressable >
                    <Text style={s.timer}>{counter} секунд</Text>
                </Pressable>
            </View>

            <View style={s.view}>
                <Text style={s.choicesText}>Ваш прогрес:</Text>
                <Text style={s.choicesText}>(Відповідей {index}/{totalQuestions})</Text>
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
                style={
                    answerStatus === null
                        ? null
                        : {
                            backgroundColor: "#F0F8FF",
                            padding: 10,
                            borderRadius: 7,
                            height: 120,
                        }
                }
            >
                {answerStatus === null ? null : (
                    <Text
                        style={
                            answerStatus == null
                                ? null
                                : { fontSize: 8, textAlign: "center", fontWeight: "bold" }
                        }
                    >
                        {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
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
                        style={s.nextButton}
                    >
                        <Text style={{ color: "white" }}>Done</Text>
                    </Pressable>
                ) : answerStatus === null ? null : (
                    <Pressable
                        onPress={() => setIndex(index + 1)}
                        style={s.nextButton}>
                        <Text style={{ color: "white" }}>Next Question</Text>
                    </Pressable>
                )}
            </View>

        </SafeAreaView>
    )
}

export default QuizzScreen;