import { MarksContext } from "../App";
import { useContext } from "react";

const End = () => {
    const [marks, setMarks] = useContext(MarksContext);


    return (
        <div className="bg-blue-500 h-full w-full flex justify-center items-center">
            <h1 className="text-6xl text-amber-400 font-black">Your Score is {marks}</h1>
        </div>
    )
}

export default End;