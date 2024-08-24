import React from "react";

interface QuizResultsProps {
  score: number;
  totalScore: number;
  questions: {
    questionText: string;
    userAnswer: string | string[];
    correctAnswer: string | string[];
    isCorrect: boolean;
    explanation?: string;
  }[];
  onReturnToHome: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  score,
  totalScore,
  questions,
  onReturnToHome,
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        Quiz Results
      </h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Your Score</h2>
        <div className="flex justify-center">
          <p className="text-5xl mb-4 border-b border-gray-500/50 pb-2 dark:border-white">
            <span className="font-extrabold">{score}</span>/{totalScore}
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6 pl-3 pb-2 border-b-2 dark:border-gray-500/50">
          Question(s) Summary
        </h3>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div key={index} className={`p-4`}>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {index + 1}. {q.questionText}
              </h4>
              <p
                className={`mb-1 ${
                  q.isCorrect ? "text-green-500" : "text-red-500"
                }`}
              >
                <span className="font-semibold">Your Answer:</span>{" "}
                {Array.isArray(q.userAnswer)
                  ? q.userAnswer.join(", ")
                  : q.userAnswer}
              </p>
              {!q.isCorrect && (
                <p className={`mb-1 text-green-500`}>
                  <span className="font-semibold">Correct Answer:</span>{" "}
                  {Array.isArray(q.correctAnswer)
                    ? q.correctAnswer.join(", ")
                    : q.correctAnswer}
                </p>
              )}

              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Explanation:</span>{" "}
                {q.explanation || "No explanation provided"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-colors"
            onClick={onReturnToHome}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
