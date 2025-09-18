import background from '../assets/Background_Cliffhouse.jpg'


const Home = () => {
    const start = () => {
        console.log("start");
        
    }
    return (
        <div className="w-full h-full text-center p-8 flex flex-col justify-center items-center  gap-32" style={{ backgroundImage: `url(${background})` }}>
            <h1 className='text-amber-200 text-7xl font-serif font-black'>Simple Select Quiz Game</h1>
            <h2 className='text-6xl text-blue-100'>How Much Common Sense Do You Know?</h2>
            <button className='text-7xl hover:cursor-pointer rounded-xl outline-4 animate-bounce text-purple-200 p-10' onClick={start}>Start</button>
        </div>
    )
}

export default Home;