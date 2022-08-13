import React from 'react';

import '../assets/style.css';

function Meme(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: ""
    }),
        [memesData, setMemesData] = React.useState({});

    function handleChange(event) {
        const { name, value } = event.target;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }

    function generateRandomImage() {
        const randIdx = Math.floor(Math.random() * 100),
            imgURL = memesData.data.memes[randIdx].url;
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: imgURL
            }
        });
    }

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then((response) => {
            return response.json();
        }).then((data) => {
            setMemesData(data);
        });
    }, []);

    return (
        <div className="meme-container box-border mt-4 md:mt-8">
            <div className="meme-form box-border font-karla px-6 md:px-0 md:grid md:grid-cols-2 md:gap-x-6">
                <input type="text" placeholder="Top text" className="box-border w-full border border-[#D5D4D8] px-3 py-2 rounded-md focus:outline-none focus:border-[#A626D3] focus:border-2" name="topText" onChange={handleChange}></input>
                <input type="text" placeholder="Bottom text" className="box-border w-full border border-[#D5D4D8] px-3 py-2 mt-4 rounded-md focus:outline-none focus:border-[#A626D3] focus:border-2 md:mt-0" name="bottomText" onChange={handleChange}></input>
                <button className="box-border w-full bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-karla font-medium py-3 rounded-md mt-6 col-span-2" onClick={generateRandomImage}>Get a new meme image  🖼️</button>
            </div>

            <div className="meme-image-container box-border my-6 px-6 md:px-0 relative flex justify-center">
                <img src={meme.randomImg} className="meme-image box-border w-full max-w-[450px]"></img>
                <h1 className="top-text box-border text-center absolute top-2 uppercase font-anton text-3xl text-white meme-text-shadow">{meme.topText}</h1>
                <h1 className="bottom-text box-border text-center absolute bottom-2 uppercase font-anton text-3xl text-white meme-text-shadow">{meme.bottomText}</h1>
            </div>
        </div>
    );
}

export default Meme;