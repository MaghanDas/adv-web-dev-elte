// Build a simple quiz with 5 hardcoded questions. Show one question at a time. User picks an answer, sees if they got it right, then moves to the next question. Show final score at the end.
// Requirements
// A Question component that receives question, options, and onAnswer as props
// Track current question index and score in useState
// When an answer is clicked, show green (correct) or red (wrong) feedback before moving on
// When all questions are done, show a results screen with the score and a "Play Again" button that resets state
// No API needed — hardcode your 5 questions as a JS array
// Your state will be: currentIndex, score, selectedAnswer (null until clicked), isFinished. When an answer is clicked, set selectedAnswer, wait 1 second with setTimeout, then advance the index.

import { useState, useEffect, use } from "react";
import './App.css'


function App(){
const questions = [
    {
      question: "What is 2 + 2?",
      options: ["2", "3", "4", "5"],
      answer: "4"
    },
    {
      question: "Capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: "Paris"
    },
    {
      question: "React is a ...?",
      options: ["Library", "Framework", "Language", "Database"],
      answer: "Library"
    },
    {
      question: "Which is used for state?",
      options: ["useEffect", "useState", "useMemo", "useRef"],
      answer: "useState"
    },
    {
      question: "JS runs in?",
      options: ["Browser", "Server only", "Compiler", "OS"],
      answer: "Browser"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  function handleAnswer(option){
    const currentQuestion = questions[currentIndex];

    setSelectedAnswer(option);
    const isCorrect = option === currentQuestion.answer;

    if(isCorrect){
        setScore(prev => prev + 1);
    }

    setTimeout(() => {
        const nextIndex = currentIndex + 1;

        if(nextIndex < questions.length){
            setCurrentIndex(nextIndex);
            setSelectedAnswer(null);
        }else{
            setIsFinished(true);
        }
    }, 1000);
  }
  
  function restartQuiz(){
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  }

  if(isFinished){
    return (
        <div>
            <h1>Quiz Finished</h1>
            <h2>Your Score : {score} / {questions.length}</h2>
            <button onClick={restartQuiz}>Play Again</button>
        </div>
    );
  }
return (
    <div>
        <h2>Quiz APP </h2>
        <h2>Questions {currentIndex + 1} / {questions.length}</h2>
        <h3>{currentQuestion.question}</h3>

        <div>
            {currentQuestion.options.map((option) => {
                const isCorrect = option === currentQuestion.answer;
                const isSelected = option === selectedAnswer;
                let bgColor = "";

                if(selectedAnswer){
                    if (isSelected && isCorrect) {
                     bgColor = "green";   
                    }else if (isSelected && !isCorrect) bgColor = "red";
                }
                return(
                    <button
                    key={option}
                    onClick={()=>handleAnswer(option)}
                    disabled={selectedAnswer !== null}
                    style={{
                        display: "block",
                        margin: "8px",
                        backgroundColor: bgColor
                    }}>
                        {option}
                    </button>
                );
            })}
        </div>
        <p>Score : {score}</p>
    </div>
    );
}

export default App