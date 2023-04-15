import { cherryBun, vatrushka, jabluko, keks, korica, mak } from "./images"

export default questions = [
    {
        image: cherryBun,
        question: "Що це за булочка?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Булочка з корицею",
            },
            {
                id: "1",
                letter: "Б",
                answer: "Булочка з вишнею",
                isTrue: true
            },
            {
                id: "2",
                letter: "В",
                answer: "Булочка з абрикосою",
            },
        ],
        correctAnswerIndex: 1
    },

    {
        image: vatrushka,
        question: "Що це за булочка?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Булочка ватрушка",
                isTrue: true
            },
            {
                id: "1",
                letter: "Б",
                answer: "Булочка зі сливою",
            },
            {
                id: "2",
                letter: "В",
                answer: "Булочка англійська",
            },
        ],
        correctAnswerIndex: 0
    },

    {
        image: jabluko,
        question: "Що це за булочка?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Булочка з корицею",
            },
            {
                id: "1",
                letter: "Б",
                answer: "Булочка з вишнею",
            },
            {
                id: "2",
                letter: "В",
                answer: "Булочка з яблуком",
                isTrue: true
            },
        ],
        correctAnswerIndex: 2
    },

    {
        image: keks,
        question: "Це мафін чи кекс?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Кекс класичний з родзинками",
                isTrue: true
            },
            {
                id: "1",
                letter: "Б",
                answer: "Мафін ванільний",
            },
            {
                id: "2",
                letter: "В",
                answer: "Мафін ванільний шоколадний",
            },
        ],
        correctAnswerIndex: 0
    },

    {
        image: mak,
        question: "Що це за булочка?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Булочка з повидлом",
            },
            {
                id: "1",
                letter: "Б",
                answer: "Булочка з маком",
                isTrue: true
            },
            {
                id: "2",
                letter: "В",
                answer: "Булочка з вишнею",
            },
        ],
        correctAnswerIndex: 1
    },

    {
        image: korica,
        question: "Що це за булочка?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Булочка з корицею",
                isTrue: true
            },
            {
                id: "1",
                letter: "Б",
                answer: "Булочка з сиром та зеленню",
            },
            {
                id: "2",
                letter: "В",
                answer: "Булочка з вишнею",
            },
        ],
        correctAnswerIndex: 0
    },
]