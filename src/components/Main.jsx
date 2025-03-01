import React, { useState, useEffect } from 'react'
import memeImage from "/images/memeimg.png"

function Main() {
    const[meme, setMeme] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "shut up",
        bottomText: "and take my money"
    })
    const [memeData, setMemeData] = useState([])

    function handleChange(event){
        const{ value, name} = event.currentTarget
        setMeme((prevValue) => {return{...prevValue, [name]:value }
        })
    }
    function getRandomMeme(){
        const randomNumber = Math.floor(Math.random() *memeData.length)
        const newMemeUrl = memeData[randomNumber].url
        setMeme(prevMeme => {return{...prevMeme,imageUrl:newMemeUrl}})
    }
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeData(data.data.memes)
            )
        
        
        },[])
  
  return (
 <main>
    <div className='form'>
        <label >Top Text
            <input 
            type="text" 
            name='topText'
            placeholder='shut up'
            onChange={handleChange} 
            
            />

        </label> 
    <label >Bottom Text
        <input type="text" 
        name='bottomText'
        placeholder='and take my money'
        onChange={handleChange} />

    </label> 
    <button onClick={getRandomMeme}>Get a new meme image 🖼</button>

    </div>
    <div className='meme'>
        <img src={meme.imageUrl} alt="A meme image" />
        <span className='top'>{meme.topText}</span>
        <span className='bottom'>{meme.bottomText}</span>
    </div>
   
 </main>
  )
}

export default Main
