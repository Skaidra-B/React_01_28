import './App.css';
import Square from "./components/Square";
import {useState, useEffect} from "react";

const colors = [
    {color: "blue", matched: false},
    {color: "yellow", matched: false},
    {color: "red", matched: false},
    {color: "green", matched: false},
    {color: "black", matched: false},
    {color: "brown", matched: false}
]

function App() {

    const [getColor, setColor] = useState([])
    const [getTurns, setTurns] = useState(0)

    const [getChoiceOne, setChoiceOne] = useState(null)
    const [getChoiceTwo, setChoiceTwo] = useState(null)

    const [getDisabled, setDisabled] = useState(false)

    const shuffleColors = () => {
        const shuffledColors = [...colors, ...colors]
            .sort(() => Math.random() - 0.5)
            .map((clr) => ({...clr, id: Math.random()}))
        setChoiceOne(null)
        setChoiceTwo(null)
        setColor(shuffledColors)
        setTurns(0)
    }

    // console.log(getColor)
    const handleChoice = (color) => {
        getChoiceOne ? setChoiceTwo(color) : setChoiceOne(color)
    }

    useEffect(() => {
        if (getChoiceOne && getChoiceTwo) {
            setDisabled(true)
            if (getChoiceOne.color === getChoiceTwo.color) {
                setColor(prevColor => {
                    return prevColor.map(clr => {
                        if (clr.color === getChoiceOne.color) {
                            return {...clr, matched: true}
                        } else {
                            return clr
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [getChoiceOne, getChoiceTwo])

    useEffect(() => {
        shuffleColors()
    }, [])


    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    return (
            <div className="d-flex column a-center">
                <h1>Memory Game</h1>
                <button onClick={shuffleColors}>New Game</button>
                <div className="wrapper d-flex j-center">
                    {getColor.map(clr => (
                        <Square key={clr.id} color={clr} handleChoice={handleChoice}
                                disabled={getDisabled}
                                flipped={clr === getChoiceOne || clr === getChoiceTwo || clr.matched}/>
                    ))}
                </div>
                <h3>Turns: {getTurns}</h3>
            </div>
    );
}

export default App;
