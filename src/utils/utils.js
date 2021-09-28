export const rollDice = (diceAmount, diceSides) => {
    let result
    let resultArray = []
    for (let i = 0; i < diceAmount; i++) {
        result = (Math.floor(Math.random() * diceSides + 1))
        resultArray.push(result);
    }
    return resultArray;
}