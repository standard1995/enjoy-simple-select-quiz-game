import axios from "axios";

const sendScore = (data) => {
    axios.post('http://127.0.0.1:8000/api/quiz', data)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

export default sendScore;