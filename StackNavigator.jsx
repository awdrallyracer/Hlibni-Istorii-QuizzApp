import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen.jsx";
import QuizzScreen from "./components/Quizz/QuizzScreen.jsx"
import ResultScreen from "./components/ResultScreen/ResultScreen.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Quizz" component={QuizzScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Products" component={ProductList} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;