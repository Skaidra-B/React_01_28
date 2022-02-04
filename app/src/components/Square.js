import './Square.css'

export default function Square({color, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(color)
        }
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <div className="box color" style={{backgroundColor: color.color}}></div>
                <div className="box cover" onClick={handleClick}></div>
            </div>
        </div>
    )
}
