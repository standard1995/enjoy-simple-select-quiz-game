import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from '../data/questions.json'
import { MarksContext } from '../App.jsx'

const Game = () => {
    const navigate = useNavigate();

    const [marks, setMarks] = useContext(MarksContext);
    const [quizNum, setQuizNum] = useState(0);
    const [selected, setSelected] = useState('');
    const quiz = questions[quizNum];


    useEffect(() => {
        const timer = setTimeout(() => {
            setMarks(prev => String(Math.max(Number(prev) - 1, 0)));
            checkAnswer('*');
        }, 60000);

        return () => clearTimeout(timer);
    }, [quizNum]);



    const checkAnswer = (answer) => {
        setSelected(answer);
        stop();
        if (quiz.correctAnswer == answer) {
            console.log(answer);
            console.log("right");
            setMarks(marks + 1);
        } else {
            console.log("wrong")
        };


        setTimeout(() => {
            setQuizNum(quizNum + 1);
            setSelected('');
            if (quizNum >= questions.length - 1) {
                navigate('/end');
            }
            start();
        }, 1000);
    }
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);

    // Start the timer progress
    const start = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(0);
        const interval = 60000 / 100; // 60000 ms total divided by 100 steps (1% each)
        intervalRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    return 100;
                }
                return prev + 1;
            });
        }, interval);
    };

    // Stop the timer progress
    const stop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Start timer on mount
    useEffect(() => {
        start();
        return () => stop(); // Cleanup on unmount
    }, []);

    return (
        <div className="h-full w-full bg-gradient-to-r from-gray-900 to-indigo-900 flex flex-col justify-center items-center">
            <div className="w-[60vw] border rounded-3xl border-amber-100">
                <div className="h-[20vh] p-6 text-center text-4xl font-black flex">
                    <h1 className="m-auto text-cyan-50 shadow-2xs">{quiz.question}</h1>
                </div>
                <div className="h-3 w-full rounded-[6px] from-amber-700 bg-amber-200 to-amber-700">
                    <div className="h-full rounded-[6px] bg-gradient-to-b from-pink-500 via-red-500 to-pink-500" style={{width: `${100 - progress}%`, transition: "width 0.6s linear"}}></div>
                </div>
                <div className="h-10 text-center">
                    <p className="text-4xl text-amber-200 p-2">{selected && quiz.correctAnswer}</p>
                </div>
                <div className={`h-[35vh] p-6 mt-6 flex justify-center gap-2 `}>
                    {
                        quiz.answers.map((answer, value) => {
                            return (
                                <div key={value} onClick={() => checkAnswer(answer)} className={`${answer != selected ? 'bg-blue-400' : answer == quiz.correctAnswer ? 'bg-green-400' : 'bg-red-400'} text-4xl w-[24%] h-full hover:cursor-pointer  flex items-center justify-center border-4 rounded-2xl border-indigo-800 shadow-2xs`}>
                                    <p className="font-bold text-purple-800 w-full text-center">{answer}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Game;