import React, { useState, useEffect, useRef } from "react";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  onAnswer: (
    answer: string | string[],
    isCorrect: boolean,
    points: number
  ) => void;
  onNextQuestion: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onNextQuestion,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showFeedback, setShowFeedback] = useState(false);

  const hideFeedback = () => {
    setShowFeedback(false);
    setAnswered(false);
    setSelectedAnswers([]);
  };

  let timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showFeedback) {
      timer.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev < 1) {
            clearInterval(timer.current!);
            handleNextQuestion();
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [showFeedback]);

  const handleOptionClick = (option: string) => {
    if (answered) return;

    if (question.type === "single") {
      setSelectedAnswers([option]);
      const isCorrect = option === question.correctAnswer;
      onAnswer([option], isCorrect, isCorrect ? question.points : 0);
      setIsCorrect(isCorrect);
      setAnswered(true);
      setShowFeedback(true);
    } else {
      const newAnswers = selectedAnswers.includes(option)
        ? selectedAnswers.filter((a) => a !== option)
        : [...selectedAnswers, option];
      setSelectedAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    if (question.type === "multiple") {
      const isCorrect =
        JSON.stringify(selectedAnswers.sort()) ===
        JSON.stringify(question.correctAnswer.sort());
      onAnswer(selectedAnswers, isCorrect, isCorrect ? question.points : 0);
      setIsCorrect(isCorrect);
      setAnswered(true);
      setShowFeedback(true);
    }
  };

  const checkAnswer = (answers: string[]) => {
    const correct = Array.isArray(question.correctAnswer)
      ? JSON.stringify(answers.sort()) ===
        JSON.stringify(question.correctAnswer.sort())
      : answers[0] === question.correctAnswer;

    setIsCorrect(correct);
    setAnswered(true);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    onNextQuestion();
    hideFeedback();
    setCountdown(5);
    clearInterval(timer.current!);
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-bold mb-4">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-3 rounded-md transition-colors ${
              selectedAnswers.includes(option)
                ? showFeedback
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
      {question.type === "multiple" && !showFeedback && (
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
      {showFeedback && (
        <div className="">
          <div className="flex items-end justify-end mb-4">
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={handleNextQuestion}
            >
              Next Question
            </button>
          </div>
          <div
            className={`border ${
              isCorrect ? "border-green-500" : "border-red-500"
            } p-4`}
          >
            <p
              className={`font-bold ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
            <p>Points earned: {isCorrect ? question.points : 0}</p>
            <p>
              Correct answer(s):{" "}
              {Array.isArray(question.correctAnswer)
                ? question.correctAnswer.join(", ")
                : question.correctAnswer}
            </p>
            <p>Explanation: {question.explanation}</p>
            <p className="mt-2">Next question in {countdown} seconds...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
