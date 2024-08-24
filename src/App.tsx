import React, { useState, useEffect } from "react";
import QuizSelector from "./components/QuizSelector";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import ThemeToggle from "./components/ThemeToggle";
import { Quiz } from "./types";
import quizzes from "./data/quizzes";
import QuizResults from "./components/QuizResults";

const App: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [quizResults, setQuizResults] = useState<{
    score: number;
    totalScore: number;
    questions: {
      questionText: string;
      userAnswer: string | string[];
      correctAnswer: string | string[];
      isCorrect: boolean;
      explanation?: string;
    }[];
  } | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizResults(null); // Reset results when a new quiz is selected
  };

  const [_, setUserAnswers] = useState<{
    [key: number]: {
      answer: string | string[];
      isCorrect: boolean;
    };
  }>({});

  const handleAnswer = (
    answer: string | string[],
    isCorrect: boolean,
    points: number
  ) => {
    setScore((prevScore) => prevScore + points);

    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: {
        answer,
        isCorrect,
      },
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuiz!.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setUserAnswers((prevUserAnswers) => {
        const results = {
          score,
          totalScore: selectedQuiz!.questions.reduce(
            (acc, q) => acc + q.points,
            0
          ),
          questions: selectedQuiz!.questions.map((q, index) => ({
            questionText: q.text,
            userAnswer: prevUserAnswers[index]?.answer || "No answer",
            correctAnswer: q.correctAnswer,
            isCorrect: prevUserAnswers[index]?.isCorrect || false,
            explanation: q.explanation,
          })),
        };
        setQuizResults(results);
        setSelectedQuiz(null);
        return prevUserAnswers;
      });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleReturnToHome = () => {
    setQuizResults(null);
    setSelectedQuiz(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Quiz App</h1>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        {quizResults ? (
          <QuizResults
            score={quizResults.score}
            totalScore={quizResults.totalScore}
            questions={quizResults.questions}
            onReturnToHome={handleReturnToHome}
          />
        ) : selectedQuiz ? (
          <>
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={selectedQuiz.questions.length}
            />
            <QuestionCard
              question={selectedQuiz.questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onNextQuestion={handleNextQuestion}
            />
          </>
        ) : (
          <QuizSelector quizzes={quizzes} onSelectQuiz={handleSelectQuiz} />
        )}
      </div>
    </div>
  );
};

export default App;
