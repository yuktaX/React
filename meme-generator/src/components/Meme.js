import React, { useEffect } from "react";

export default function Meme() {

    const [allMemeImages, setAllImages] = React.useState([])
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText:"", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => setAllImages(res.data.memes))
    }, [])

    function getMeme() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prev => ({ 
            ...prev , 
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]:value
            }
        })

    }
    return (
        <main>
            <div className="form">
                <input 
                    className="form-input"
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                />
                <input 
                    className="form-input"
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                />
                <button 
                    onClick={getMeme}
                    className="form-button">Get a new meme image 🖼</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme-img"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}