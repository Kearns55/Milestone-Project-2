/* jshint esversion: 11 */

const animalQuestions = [
    {
        question: "dog",
        answers: [
            {text: "Madra", correct: true},
            {text: "Cat", correct: false},
            {text: "Capall", correct: false},
            {text: "Póca", correct: false}
        ]
    },
    {
        question: "cat",
        answers: [
            {text: "Cat", correct: true},
            {text: "Madra", correct: false},
            {text: "Luch", correct: false},
            {text: "Loscán", correct: false}
        ]
    },
    {
        question: "horse",
        answers: [
            {text: "Capall", correct: true},
            {text: "Bó", correct: false},
            {text: "Leon", correct: false},
            {text: "Eilifint", correct: false}
        ]
    },
    {
        question: "cow",
        answers: [
            {text: "Bó", correct: true},
            {text: "Muc", correct: false},
            {text: "Capall", correct: false},
            {text: "Madra", correct: false}
        ]
    },
    {
        question: "sheep",
        answers: [
            {text: "Caora", correct: true},
            {text: "Coinín", correct: false},
            {text: "Gabhar", correct: false},
            {text: "Loscán", correct: false}
        ]
    },
    {
        question: "pig",
        answers: [
            {text: "Muc", correct: true},
            {text: "Bó", correct: false},
            {text: "Luch", correct: false},
            {text: "Francach", correct: false}
        ]
    },
    {
        question: "goat",
        answers: [
            {text: "Gabhar", correct: true},
            {text: "Caora", correct: false},
            {text: "Capall", correct: false},
            {text: "Tíogar", correct: false}
        ]
    },
    {
        question: "chicken",
        answers: [
            {text: "Cearc", correct: true},
            {text: "Lacha", correct: false},
            {text: "Madra", correct: false},
            {text: "Éan", correct: false}
        ]
    },
    {
        question: "duck",
        answers: [
            {text: "Lacha", correct: true},
            {text: "Cearc", correct: false},
            {text: "Rón", correct: false},
            {text: "Féileacán", correct: false}
        ]
    },
    {
        question: "rabbit",
        answers: [
            {text: "Coinín", correct: true},
            {text: "Luch", correct: false},
            {text: "Caora", correct: false},
            {text: "Gabhar", correct: false}
        ]
    },
    {
        question: "fox",
        answers: [
            {text: "Sionnach", correct: true},
            {text: "Fia", correct: false},
            {text: "Madra", correct: false},
            {text: "Bear", correct: false}
        ]
    },
    {
        question: "bear",
        answers: [
            {text: "Béar", correct: true},
            {text: "Leon", correct: false},
            {text: "Tíogar", correct: false},
            {text: "Eilifint", correct: false}
        ]
    },
    {
        question: "deer",
        answers: [
            {text: "Fia", correct: true},
            {text: "Mac Tíre", correct: false},
            {text: "Féileacán", correct: false},
            {text: "Rón", correct: false}
        ]
    },
    {
        question: "wolf",
        answers: [
            {text: "Mac Tíre", correct: true},
            {text: "Madra", correct: false},
            {text: "Leon", correct: false},
            {text: "Tíogar", correct: false}
        ]
    },
    {
        question: "mouse",
        answers: [
            {text: "Luch", correct: true},
            {text: "Francach", correct: false},
            {text: "Coinín", correct: false},
            {text: "Ant", correct: false}
        ]
    },
    {
        question: "rat",
        answers: [
            {text: "Francach", correct: true},
            {text: "Luch", correct: false},
            {text: "Iasc", correct: false},
            {text: "Madra", correct: false}
        ]
    },
    {
        question: "snake",
        answers: [
            {text: "Nathair", correct: true},
            {text: "Iasc", correct: false},
            {text: "Loscán", correct: false},
            {text: "Mac Tíre", correct: false}
        ]
    },
    {
        question: "fish",
        answers: [
            {text: "Iasc", correct: true},
            {text: "Deilf", correct: false},
            {text: "Míol Mór", correct: false},
            {text: "Loscán", correct: false}
        ]
    },
    {
        question: "bird",
        answers: [
            {text: "Éan", correct: true},
            {text: "Bee", correct: false},
            {text: "Ant", correct: false},
            {text: "Cat", correct: false}
        ]
    },
    {
        question: "frog",
        answers: [
            {text: "Loscán", correct: true},
            {text: "Iasc", correct: false},
            {text: "Coinín", correct: false},
            {text: "Luch", correct: false}]}
];

const fruitQuestions = [
    {
        question: "apple",
        answers: [
            {text: "Úll", correct: true},
            {text: "Banana", correct: false},
            {text: "Pineapple", correct: false},
            {text: "Síol", correct: false}
        ]
    },
    {
        question: "banana",
        answers: [
            {text: "Banana", correct: true},
            {text: "Úll", correct: false},
            {text: "Pineapple", correct: false},
            {text: "Síol", correct: false}
        ]
    },
    {
        question: "grape",
        answers: [
            {text: "Cruite", correct: true},
            {text: "Úll", correct: false},
            {text: "Banana", correct: false},
            {text: "Síol", correct: false}
        ]
    },
    {
        question: "orange",
        answers: [
            {text: "Oráiste", correct: true},
            {text: "Úll", correct: false},
            {text: "Banana", correct: false},
            {text: "Síol", correct: false}
        ]
    },
    {
        question: "pineapple",
        answers: [
            {text: "Ananás", correct: true},
            {text: "Úll", correct: false},
            {text: "Banana", correct: false},
            {text: "Síol", correct: false}]}
];

const colourQuestions = [
    {
        question: "red",
        answers: [
            {text: "Dearg", correct: true},
            {text: "Gorm", correct: false},
            {text: "Buí", correct: false},
            {text: "Glas", correct: false}
        ]
    },
    {
        question: "green",
        answers: [
            {text: "Glas", correct: true},
            {text: "Gorm", correct: false},
            {text: "Buí", correct: false},
            {text: "Dearg", correct: false}
        ]
    },
    {
        question: "blue",
        answers: [
            {text: "Gorm", correct: true},
            {text: "Glas", correct: false},
            {text: "Buí", correct: false},
            {text: "Dearg", correct: false}
        ]
    },
    {
        question: "yellow",
        answers: [
            {text: "Buí", correct: true},
            {text: "Gorm", correct: false},
            {text: "Glas", correct: false},
            {text: "Dearg", correct: false}
        ]
    },
    {
        question: "black",
        answers: [
            {text: "Dubh", correct: true},
            {text: "Gorm", correct: false},
            {text: "Glas", correct: false},
            {text: "Buí", correct: false}]}
];