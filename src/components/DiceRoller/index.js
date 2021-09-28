import {useState, useEffect} from 'react';
import {rollDice} from '../../utils/utils'

const DiceRoller = () => {

    const [diceAmount, setDiceAmount] = useState(1);
    const [diceSides, setDiceSides] = useState(20);
    const [resultArray, setResultArray] = useState([0]);
    const [resultTotal, setResultTotal] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    const handleDiceAmount = (value) => {
        setDiceAmount(value);
    }

    const handleDiceSides = (value) => {
        setDiceSides(value);
    }

    const handleDiceRoll = (diceAmount, diceSides) => {
        setResultArray(rollDice(diceAmount, diceSides))
    }

    useEffect(() => {
        setResultTotal(resultArray.reduce((a, b) => a + b, 0))
    }, [resultArray])

    useEffect(() => {
        if (diceSides > 1000 || diceAmount > 5000) {
            setDisableButton(true)
        } else {
            setDisableButton(false);
        }
    }, [diceAmount, diceSides])


    return (
        <div>
            <h2>Dice Roller</h2>
            <label>Dice Amount: </label> <input type="number" onChange={event => handleDiceAmount(event.target.value)} value={diceAmount} />{diceAmount > 5000 ? " Max 5000" : ''}<br />
            <label>Dice Sides: </label> <input type="number" onChange={event => handleDiceSides(event.target.value)} value={diceSides} />{diceSides > 1000 ? " Max 1000" : ''}<br/>
            <button type="submit" disabled={disableButton} onClick={() => handleDiceRoll(diceAmount, diceSides)}>Roll em!</button><br/>

            Result: {resultArray.map(result => {
                return (
                    `${result} `
                )
            })}<br/><strong>Total: {resultTotal}</strong>.
        </div>
    )

}

export default DiceRoller