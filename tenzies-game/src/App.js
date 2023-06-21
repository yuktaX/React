import React from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


export default function App() {

    function createNewdie(){
        return (
            {
                value:Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
        )
    }

    function allNewDice() {
        const arr = []

        for(let i = 0; i < 10; i++){
            arr.push(createNewdie())
        }
        return arr   
    }

    function handleClick(){

        let count = 0
        const updated = []

        for(let i = 0; i < 10; i++)
        {
            if(allDice[i].isHeld){
                count++
                updated.push(allDice[i])
            }
            else{
                updated.push(createNewdie())
            }
        }

        count === 10 ? setDice(allNewDice()) : setDice(updated) 
    }

    function holdDice(id){

        const updatedDice = []
        for(let i = 0; i < allDice.length; i++){
            if(allDice[i].id == id){
                allDice[i].isHeld = !allDice[i].isHeld
            }
            updatedDice.push(allDice[i])
        }

        setDice(updatedDice)

        // setDice(oldDice => oldDice.map(die => {-----alt
        //     return die.id === id ? 
        //         {...die, isHeld: !die.isHeld} :
        //         die
        // }))
    }

    const [allDice, setDice] = React.useState(allNewDice())

    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
        
        let flg = 1

        for(let i = 0; i < 9; i++)
        {
            if(allDice[i].value != allDice[i + 1].value || allDice[i].isHeld === false){
                flg = 0
                break
            }
        }

        flg === 1 ? setTenzies(true) : setTenzies(false)

        //------ALT-------
        // const allHeld = dice.every(die => die.isHeld)
        // const firstValue = dice[0].value
        // const allSameValue = dice.every(die => die.value === firstValue)
        // if (allHeld && allSameValue)

    }, [allDice])

    const dices = allDice.map(dice => <Die value={dice.value} held={dice.isHeld} id={dice.id} handler={() => holdDice(dice.id)}/>)

    return (
        <main className="main-body">
            {tenzies && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
            <h1>Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice">
                {dices}
            </div>
            <button onClick={handleClick}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}