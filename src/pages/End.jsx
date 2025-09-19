import { useNavigate } from "react-router-dom";
import { MarksContext } from "../App";
import { useContext } from "react";

const End = () => {
    const [marks, setMarks] = useContext(MarksContext);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    }
    return (
        <div className="bg-blue-500 h-full w-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-6xl text-amber-400 font-black">Your Score is {marks}</h1>
            <button onClick={() => goBack()} className="bg-[#ffe364ab] h-[60px] w-[120px] rounded-xl font-black text-blue-700 text-xl border-double border-4 border-sky-500 hovor: cursor-pointer hover:bg-emerald-300 md:animate-pulse">Go Back</button>
        </div>
    )
}

export default End;