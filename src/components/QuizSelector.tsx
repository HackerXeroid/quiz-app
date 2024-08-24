import React from "react";
import { Quiz } from "../types";

interface QuizSelectorProps {
  quizzes: Quiz[];
  onSelectQuiz: (quiz: Quiz) => void;
}

const QuizSelector: React.FC<QuizSelectorProps> = ({
  quizzes,
  onSelectQuiz,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quizzes.map((quiz) => (
        <div
          key={quiz.id}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => onSelectQuiz(quiz)}
        >
          <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{quiz.description}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizSelector;
