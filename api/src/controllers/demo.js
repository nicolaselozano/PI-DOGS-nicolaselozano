let temperament = ["Stubborn, Curious, Playful, Adventurous, Active, Fun-loving, Curious, Fun-loving", "Outgoing, Friendly, Fun-loving"]



let arr= []

for (let i = 0; i < temperament.length; i++) {
    
    let arrTemp= temperament[i].split(", ");

    arr = [...arr,arrTemp];
    
}


// set

const setTemp = new Set(arr);

console.log(setTemp)
