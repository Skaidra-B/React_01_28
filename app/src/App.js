import './App.css';
import Square from "./components/Square";
import {useState} from "react";

const colors = ["blue", "yellow"]
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

function App() {

    const randomIndex = Math.floor(Math.random() * colors.length)

    const [getColor, setColor] = useState("grey")
    const [getSquareSelected, setSquareSelected] = useState([])
    const [getCounter, setCounter] = useState(0)

    function fillColor() {
        setColor(colors[randomIndex])
        getSquareSelected.push(getColor)
        console.log(getSquareSelected)

        if (getSquareSelected[0] === getSquareSelected[1]) {
            setCounter(getCounter + 1)
            setSquareSelected([])
        }
        if (getSquareSelected[0] !== getSquareSelected[1]) {
            setTimeout(() => {
                setSquareSelected([])
                setColor("grey")
            }, 3000);
        }
    }

    return (

        <div className="d-flex column a-center">
            <h2>Counter: {getCounter}</h2>
            <div className="wrapper d-flex j-center">
                {squares.map((x, i) => <Square square={x} index={i} key={i} fillColor={fillColor} getColor={getColor}/>)}
            </div>

            {/*<div className="wrapper d-flex j-center">*/}
            {/*    {squares.map((x, i) => <div  key={i} className="box" style={{backgroundColor: getColor}} onClick={fillColor}*/}
            {/*    />)}*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
