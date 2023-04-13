import { cherryBun, vatrushka } from "./images"

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
        question: "Чи це ватрушка?",
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
        image: vatrushka,
        question: "Абрикос чи слива?",
        options: [
            {
                id: "0",
                letter: "A",
                answer: "Абрикос",
                isTrue: true
            },
            {
                id: "1",
                letter: "Б",
                answer: "Слива",
            },
            {
                id: "2",
                letter: "В",
                answer: "Шоколад",
            },
        ],
        correctAnswerIndex: 0
    },
]