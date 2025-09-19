import { useNavigate } from "react-router-dom";
import { MarksContext } from "../App";
import { useContext, useState } from "react";
import sendScore from "../actions/score";

const End = () => {
    const [marks, setMarks] = useContext(MarksContext);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }

    const save = () => {
        const data = {
            name: name,
            score: marks.score
        }
        sendScore(data);
        console.log(data);
    }

    return (
        <div className="bg-blue-500 h-full w-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-6xl text-amber-400 font-black">Your Score is {marks.score}</h1>
            <div className="flex items-center w-full max-w-md border border-black rounded-md">
                <input type="text" placeholder="Pleas Input Your Name" onChange={e=> setName(e.target.value)}
                    className="w-full max-w-md px-4 py-2  focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button onClick={() => save()} className="ml-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 hover:cursor-pointer">Save</button>
            </div>
            <button onClick={() => goBack()} className="bg-[#ffe364ab] h-[60px] w-[120px] rounded-xl font-black text-blue-700 text-xl border-double border-4 border-sky-500 hovor: cursor-pointer hover:bg-emerald-300 md:animate-pulse">Go Back</button>
        </div>
    )
}

export default End;