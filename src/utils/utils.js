export const rollDice = (diceAmount, diceSides) => {
    let result
    let resultArray = []
    for (let i = 0; i < diceAmount; i++) {
        result = (Math.floor(Math.random() * diceSides + 1))
        resultArray.push(result);
    }
    return resultArray;
}

export const critTable = [

]

export const fumbleTable = [
    "Nothing special happens on this fumble.",
    "If the fumbler wields a melee weapon, it gets lodged in the round, an enemy’s armor, or something similar. Freeing the weapon requires succeeding on a Strength (Athletics) check as a bonus action. The check’s DC is equal to 8 + the fumbler’s Strength modifier. (No additional effect for ranged weapons.)",
    "The fumbler falls prone and cannot move for the rest of their turn.",
    "Friendly Fire: The fumbler rolls damage and applies it to a friendly creature within their weapon’s reach or range. If there is no such creature, the fumbler applies that damage to themselves.",
    "An Opening: Attacks against the fumbler are made with advantage until the beginning of the fumbler’s next turn.",
    "The fumbler’s weapon flies d20 feet in a random direction.",
    "The fumbler takes one level of exhaustion.",
    "The fumbler’s weapon breaks, unless it is an artifact. (Whether it can be repaired is left to the GM’s discretion.)",
    "The fumbler’s move speed is halved until they take a short or long rest.",
    "The fumbler is Blinded until the end of their next turn.",
    "The fumbler cannot speak until the end of their next turn.",
    "The enemy nearest to the fumbler may use its reaction to make one weapon attack against the fumbler.",
    "The fumbler drops their weapon and is stunned until the end of their next turn.",
    "The fumbler has disadvantage on all attack rolls, ability checks, skill checks, or saving throws they make before the end of their next turn.",
    "The fumbler rolls damage and applies it to themselves.",
    "Roll all the attack’s damage dice twice and add them together, then add any relevant modifiers as normal. The fumbler applies this damage to themselves. They then fall Unconscious until another creature rouses them, an attack hits them, or three rounds have passed, whichever happens first."
]