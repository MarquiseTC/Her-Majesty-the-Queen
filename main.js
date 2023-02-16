// Paying Tribute
const tributeChest = []
const payTribute = ( tributeId, tributeDescription, tributeQueenId) => {
    const tributePayed = { 
        id: tributeId,
        description: tributeDescription,
        queenId: tributeId

    } 
    tributeChest.push(tributePayed)
} 
payTribute(1, "Lots of silk", 3)
payTribute(2, "Treasure", 2)
payTribute(3, "Genie in a bottle", 4)
console.log(tributeChest)




/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
// const hailTheQueen = (nameString) => {
//     return `Hail Her Majesty, ${nameString}.`  // This function returns a string
// }
// for (const queenObject of queens) { const hailMessage = 
//     hailTheQueen(queenObject.name)
// console.log(hailMessage)}

// const monica = hailTheQuen("Monica Dinglehopper")
// console.log(monica)

// Queen Colony

const queens = []
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    
    }
    queens.push(queenObject)
}
createQueen(1, "Trinity Terry")
createQueen(2, "Sydeny Noah")
createQueen(3, "Haley Berry")  
createQueen(4, "Rebekah Dennis")  
 console.log(queens)


//  iterating the Queens
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}
for (const queenObject of queens) { const hailMessage = 
    hailTheQueen(queenObject.name)
console.log(hailMessage)}


// inerate the queen objects to SHOW TRIBUTE for each one
for ( const queenObject of  queens) {
    for (const payTribute of tributeChest)
        if (payTribute.queenId === queenObject.id)
    
    
    {console.log(`${queenObject.name} has tribute 
    ${ payTribute.description}`)}
}

