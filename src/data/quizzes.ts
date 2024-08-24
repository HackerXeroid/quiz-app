import { Quiz } from "@/types";

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your general knowledge!",
    questions: [
      {
        id: 2,
        text: "Which of the following are primary colors?",
        type: "multiple",
        options: ["Red", "Green", "Blue", "Yellow"],
        correctAnswer: ["Red", "Blue", "Yellow"],
        points: 15,
        explanation:
          "The primary colors are Red, Blue, and Yellow. Green is a secondary color.",
      },
      {
        id: 1,
        text: "What is the capital of France?",
        type: "single",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris",
        points: 10,
        explanation: "Paris is the capital and most populous city of France.",
      },
      {
        id: 3,
        text: "The Earth is flat.",
        type: "single",
        options: ["True", "False"],
        correctAnswer: "False",
        points: 5,
        explanation: "The Earth is an oblate spheroid, not flat.",
      },
    ],
  },
  {
    id: 2,
    title: "Science and Nature",
    description: "Explore the wonders of science and nature!",
    questions: [
      {
        id: 1,
        text: "What is the chemical symbol for water?",
        type: "single",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswer: "H2O",
        points: 10,
        explanation:
          "Water is composed of two hydrogen atoms and one oxygen atom, represented as H2O.",
      },
      {
        id: 2,
        text: "Which planet is known as the Red Planet?",
        type: "single",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        points: 10,
        explanation:
          "Mars is often called the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
      },
      {
        id: 3,
        text: "Which of these animals is a mammal?",
        type: "multiple",
        options: ["Shark", "Eagle", "Dolphin", "Crocodile"],
        correctAnswer: ["Dolphin"],
        points: 10,
        explanation:
          "Dolphins are mammals, as they are warm-blooded and give birth to live young.",
      },
      {
        id: 4,
        text: "Is light a wave or a particle?",
        type: "multiple",
        options: ["Wave", "Particle"],
        correctAnswer: ["Wave", "Particle"],
        points: 15,
        explanation:
          "Light exhibits properties of both waves and particles, a concept known as wave-particle duality.",
      },
    ],
  },
  {
    id: 3,
    title: "History",
    description: "Test your knowledge of historical events and figures!",
    questions: [
      {
        id: 1,
        text: "Who was the first President of the United States?",
        type: "single",
        options: [
          "George Washington",
          "Thomas Jefferson",
          "Abraham Lincoln",
          "John Adams",
        ],
        correctAnswer: "George Washington",
        points: 10,
        explanation:
          "George Washington served as the first President of the United States from 1789 to 1797.",
      },
      {
        id: 2,
        text: "Which ancient civilization built the pyramids?",
        type: "single",
        options: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correctAnswer: "Egyptians",
        points: 10,
        explanation:
          "The Egyptians built the pyramids, including the famous Pyramids of Giza, as tombs for their pharaohs.",
      },
      {
        id: 3,
        text: "Which event started World War I?",
        type: "single",
        options: [
          "Assassination of Archduke Franz Ferdinand",
          "Invasion of Poland",
          "Bombing of Pearl Harbor",
          "Fall of the Berlin Wall",
        ],
        correctAnswer: "Assassination of Archduke Franz Ferdinand",
        points: 15,
        explanation:
          "The assassination of Archduke Franz Ferdinand of Austria in 1914 is commonly cited as the event that triggered World War I.",
      },
    ],
  },
  {
    id: 4,
    title: "Geography",
    description: "Test your knowledge of world geography!",
    questions: [
      {
        id: 1,
        text: "Which is the largest ocean on Earth?",
        type: "single",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean",
        ],
        correctAnswer: "Pacific Ocean",
        points: 10,
        explanation:
          "The Pacific Ocean is the largest and deepest ocean on Earth.",
      },
      {
        id: 2,
        text: "Which continent is known as the 'Dark Continent'?",
        type: "single",
        options: ["Asia", "Africa", "Europe", "South America"],
        correctAnswer: "Africa",
        points: 10,
        explanation:
          "Africa was historically referred to as the 'Dark Continent' due to its unexplored nature and the mystery surrounding it.",
      },
      {
        id: 3,
        text: "What is the longest river in the world?",
        type: "single",
        options: [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River",
        ],
        correctAnswer: "Nile River",
        points: 15,
        explanation:
          "The Nile River is traditionally considered the longest river in the world, though some sources argue the Amazon River may be longer.",
      },
    ],
  },
  // Add more quizzes here as needed
];

export default quizzes;
