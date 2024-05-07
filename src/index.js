//Object Declaration
const player1 = {
    NAME: "Mario",
    SPEED: 4,
    DRIVING: 3,
    POWER: 3,
    POINTS: 0
}

const player2 = {
    NAME: "Peach",
    SPEED: 3,
    DRIVING: 4,
    POWER: 2,
    POINTS: 0
}



//Create an asynchronous function to roll the dice
async function RollDice() {
    return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock(){
    let random = Math.random()
    let result

    //serves to test condition of values
    switch (true) {
        case random < 0.33:
            result = "Straight"
            break;
        case random <0.66:
            result = "Curve"
            break;
        default:
            result = "Battle"
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute){
    console.log(`${characterName} 🎲 roll a dice ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)

}

async function playReceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Round ${round}`)

        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

         // roll dice
    let diceResult1 = await RollDice()
    let diceResult2 = await RollDice()

    // Skill test
    let testSkill1 = 0
    let testSkill2 = 0

    if(block === "Straight"){
        testSkill1 = diceResult1 + character1.SPEED
        testSkill2 = diceResult2 + character2.SPEED
        
        await logRollResult(character1.NAME, "SPEED", diceResult1, character1.SPEED)
        await logRollResult(character2.NAME, "SPEED", diceResult2, character2.SPEED)

    }
    if(block === "Curve"){
        testSkill1 = diceResult1 + character1.DRIVING
        testSkill2 = diceResult2 + character2.DRIVING

        await logRollResult(character1.NAME, "Driving", diceResult1, character1.DRIVING)
        await logRollResult(character2.NAME, "Driving", diceResult2, character2.DRIVING)
    }
    if(block === "Battle"){
        let powerResult1 = diceResult1 + character1.POWER;
        let powerResult2 = diceResult2 + character2.POWER;

        console.log(`${character1.NAME} fought with ${character2.NAME}! 🥊`)

        await logRollResult(character1.NAME, "Power", diceResult1, character1.POWER)
        await logRollResult(character2.NAME, "Power", diceResult2, character2.POWER)

        if(powerResult1 > powerResult2 && character2.POINTS > 0){
            console.log(`${character1.NAME} Win the Battle ${character2.NAME} lost the point 🐢`)
            character2.POINTS--
        }

        if(powerResult2 > powerResult1 && character1.POINTS > 0){
            console.log(`${character2.NAME} Win the Battle ${character1.NAME} lost the point 🐢`)
            character1.POINTS--
        }


        //exempo de ifs ternarios
        console.log(powerResult2 === powerResult1 ? "Drawn confrontation! No lost points": "")
    }

     //verifica o vencedor
    if (testSkill1 > testSkill2) {
        console.log(`${character1.NAME} Scored a point!!!`) 
        character1.POINTS++;
     }else if(testSkill2 > testSkill1) {
        console.log(`${character2.NAME} Scored a point!!!`)
        character2.POINTS++;
     }

     console.log("--------------------------------")

    }

   
}

async function declareWinner(character1, character2){
    console.log("Final result: ")
    console.log(`${character1.NAME}: ${character1.POINTS} Points`)
    console.log(`${character2.NAME}: ${character2.POINTS} Points`)

    if(character1.POINTS > character2.POINTS)
        console.log(`\n${character1.NAME} Win the race congratulation!!! 🏆`)
    else if (character2.POINTS > character1.POINTS)
        console.log(`\n${character2.NAME} Win the race congratulation!!! 🏆`)
     else 
        console.log("The race ended in a tie!")
    
}

//self-invoking function
(async function main() {
    console.log(
        `🏁🚦Race between ${player1.NAME} and ${player2.NAME} about to begin... \n`
    )

    await playReceEngine(player1, player2)
    await declareWinner(player1, player2)
})()