const animal = ["犬","牛","馬","猫"];
    animalList = document.getElementById("animal");

// for (let i = 0; i < animal.length; i++){
//     const li = document.createElement("li");
//     li.textContent = animal[i];
//     animalList.appendChild(li);
// }

// animal.forEach(function(value){
//     console.log(value);
// })

// animal.forEach(value => console.log(value))

animal.forEach((value, index, array) => {
    // console.log(index)
    // console.log(value)
    const li = document.createElement("li");
    li.textContent = `${index +1}: ${value}`;
    animalList.appendChild(li);
    if (index + 1 === array.length){
        const liElement = document.createElement("li");
        liElement.textContent = "ループ終了";
        animalList.appendChild(liElement);
    }
})