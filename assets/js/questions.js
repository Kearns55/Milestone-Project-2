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
            {text: "Sicín", correct: true},
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
        question: "butterfly",
        answers: [
            {text: "Féileacán", correct: true},
            {text: "Seilide", correct: false},
            {text: "Rón", correct: false},
            {text: "Leon", correct: false}
        ]
    },
    {
        question: "bee",
        answers: [
            {text: "Beach", correct: true},
            {text: "Cat", correct: false},
            {text: "Tíogar", correct: false},
            {text: "Capall", correct: false}
        ]
    },
    {
        question: "ant",
        answers: [
            {text: "Seangán", correct: true},
            {text: "Luch", correct: false},
            {text: "Bó", correct: false},
            {text: "Iasc", correct: false}
        ]
    },
    {
        question: "dolphin",
        answers: [
            {text: "Deilf", correct: true},
            {text: "Míol Mór", correct: false},
            {text: "Rón", correct: false},
            {text: "Loscán", correct: false}
        ]
    },
    {
        question: "whale",
        answers: [
            {text: "Míol Mór", correct: true},
            {text: "Deilf", correct: false},
            {text: "Béar", correct: false},
            {text: "Leon", correct: false}
        ]
    }

];

const fruitQuestions = [
    {
        question: "apple",
        answers: [
            {text: "Úll", correct: true},
            {text: "Banana", correct: false},
            {text: "Piorra", correct: false},
            {text: "Oráiste", correct: false}
        ]
    },
    {
        question: "banana",
        answers: [
            {text: "Banana", correct: true},
            {text: "Sútha talún", correct: false},
            {text: "Fíonchaor", correct: false},
            {text: "Peitseog", correct: false}
        ]
    },
    {
        question: "pear",
        answers: [
            {text: "Piorra", correct: true},
            {text: "Pluma", correct: false},
            {text: "Silín", correct: false},
            {text: "Sú craobh", correct: false}
        ]
    },
    {
        question: "orange",
        answers: [
            {text: "Oráiste", correct: true},
            {text: "Sméar dubh", correct: false},
            {text: "Fraochán gorm", correct: false},
            {text: "Mealbhacán", correct: false}
        ]
    },
    {
        question: "strawberry",
        answers: [
            {text: "Sú talún", correct: true},
            {text: "Mealbhacán uisce", correct: false},
            {text: "Anann", correct: false},
            {text: "Liamóid", correct: false}
        ]
    },
    {
        question: "grape",
        answers: [
            {text: "Fíonchaor", correct: true},
            {text: "Líomóid", correct: false},
            {text: "Cíobhaí", correct: false},
            {text: "Fíge", correct: false}
        ]
    },
    {
        question: "peach",
        answers: [
            {text: "Péitseog", correct: true},
            {text: "Dáta", correct: false},
            {text: "Pomegránáid", correct: false},
            {text: "Aibreog", correct: false}
        ]
    },
    {
        question: "plum",
        answers: [
            {text: "Pluma", correct: true},
            {text: "Mangó", correct: false},
            {text: "Cnó cócó", correct: false},
            {text: "Abacáid", correct: false}
        ]
    },
    {
        question: "cherry",
        answers: [
            {text: "Crann silín", correct: true},
            {text: "Spíonán", correct: false},
            {text: "Mónóg", correct: false},
            {text: "Torthaí paisean", correct: false}
        ]
    },
    {
        question: "raspberry",
        answers: [
            {text: "Sú craobh", correct: true},
            {text: "Guabha", correct: false},
            {text: "Caora fin", correct: false},
            {text: "Pomelo", correct: false}
        ]
    },
    {
        question: "blackberry",
        answers: [
            {text: "Sméar dubh", correct: true},
            {text: "Durian", correct: false},
            {text: "Carambola", correct: false},
            {text: "Lychee", correct: false}
        ]
    },
    {
        question: "blueberry",
        answers: [
            {text: "Sméar dhubh", correct: true},
            {text: "Sapótaí", correct: false},
            {text: "Kumquat", correct: false},
            {text: "Longan", correct: false}
        ]
    },
    {
        question: "melon",
        answers: [
            {text: "Mealbhacán", correct: true},
            {text: "Cacau", correct: false},
            {text: "Pitaya", correct: false},
            {text: "Ackee", correct: false}
        ]
    },
    {
        question: "watermelon",
        answers: [
            {text: "Mealbhacán uisce", correct: true},
            {text: "Tamarind", correct: false},
            {text: "Physalis", correct: false},
            {text: "Langsat", correct: false}
        ]
    },
    {
        question: "pineapple",
        answers: [
            {text: "Anann", correct: true},
            {text: "Salak", correct: false},
            {text: "Jabuticaba", correct: false},
            {text: "Santol", correct: false}
        ]
    },
    {
        question: "lemon",
        answers: [
            {text: "Liomóid", correct: true},
            {text: "Camu camu", correct: false},
            {text: "Marula", correct: false},
            {text: "Baobab", correct: false}
        ]
    },
    {
        question: "lime",
        answers: [
            {text: "Líoma", correct: true},
            {text: "Chayote", correct: false},
            {text: "Medlar", correct: false},
            {text: "Nance", correct: false}
        ]
    },
    {
        question: "kiwi",
        answers: [
            {text: "Cíobhaí", correct: true},
            {text: "Bacuri", correct: false},
            {text: "Rambutan", correct: false},
            {text: "Mangosteen", correct: false}
        ]
    },
    {
        question: "fig",
        answers: [
            {text: "Fige", correct: true},
            {text: "Sapodilla", correct: false},
            {text: "Jackfruit", correct: false},
            {text: "Pulasan", correct: false}
        ]
    },
    {
        question: "date",
        answers: [
            {text: "Dáta", correct: true},
            {text: "Breadfruit", correct: false},
            {text: "Surinam cherry", correct: false},
            {text: "Jujube", correct: false}
        ]
    },
    {
        question: "pomegranate",
        answers: [
            {text: "Pomegránáit", correct: true},
            {text: "Loquat", correct: false},
            {text: "Soursop", correct: false},
            {text: "Star apple", correct: false}
        ]
    },
    {
        question: "apricot",
        answers: [
            {text: "Aibreog", correct: true},
            {text: "Horned melon", correct: false},
            {text: "Ugli fruit", correct: false},
            {text: "Cupuacu", correct: false}
        ]
    }
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