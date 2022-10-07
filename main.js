
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.

ALGORITHM
1. create a for..of loop to iterate through the objects in flowers array
2. inside for..of loop, nest an if statement
3. use comparison operator to filter prices less than 2.00 in flower.price
4. push flower into the filteredFlowers array with .push */

const inexpensiveFlowers = () => {
   
    const filteredFlowers = []  // Do not modify
    
    for (const flower of flowers) {
        if (flower.price < 2.00) {
            filteredFlowers.push(flower)
        }
    }
    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.

ALGORITHM
1. make for loop to iterate through objects in array
2. make if statement to check(validate?) usdaZones key for 3 and 8 value with && logical operator
3. use .push to push object into filteredFLowers if condition returns true
4. return filteredFlowers
    */


const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    for (let i = 0; i < flowers.length; i++) {
        if (flowers[i].usdaZones.includes(3) && flowers[i].usdaZones.includes(8)) {
            filteredFlowers.push(flowers[i])
        }
    }
    return filteredFlowers  // Do not modify
}


/*
    This function should return flowers that come in the color Orange

*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
    //1. make for loop to iterate through objects in array
    for (const flower of flowers) {
    //2. nest a for statement and access each SINGLE color property by FLOWER.colors
        for (const color of flower.colors) {
    //3. use === logical operator since this isn't an array. (.includes for arrays)
            if (color === "Orange") {
    //4. return filteredFlowers
                filteredFlowers.push(flower)
            }
        }
    }
    // for (const flower of flowers){
    //     if (flower.colors.includes("Orange")) {
    //         filteredFlowers.push(flower)
    //     }
    // }

    // for(let i = 0; i < flowers.length; i++) {
    //     if (flowers[i].colors.includes("Orange")) {
    //         filteredFlowers.push(flowers[i])
    //     }
    // }

    return filteredFlowers  // Do not modify
}
console.log(orangeFlowers())


/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/

/* 
In the next function named flowersAsHTML, you will write logic produces one, large string that contains an <article> for each flower, a <section> for each flower's colors, and a <div> for each flower's USDA zones.*/

/* Iterate through objects via for .. of iteration
Put HTML elements around strings via iteration
Specify HTML element tags according to above format using if .. else if
*/

const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    for (const flower of flowers) {
        flowersHTMLString += `\n<article>
        <h1>${flower.type}</h1>\n`
        for (const color of flower.colors) {
            flowersHTMLString += `<section>${color}</section>\n`
            }
        for (const zone of flower.usdaZones) {
                flowersHTMLString += `<div>${zone}</div>\n`
                }
          flowersHTMLString += `\n</article>`      
    }


    return flowersHTMLString  // Do not modify
}















































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

