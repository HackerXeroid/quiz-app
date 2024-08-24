export interface Question {
  id: number;
  text: string;
  type: "single" | "multiple";
  options: string[];
  correctAnswer: string | string[];
  points: number;
  explanation: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
