// let person = {
//     name: "Kenny",
//     age: 34,
//     state: "Tn"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + "years old and lives in " + person.state)
// }

// logData()

// let age = 34

// if (age < 6) {
//     console.log("free");
// } else if (age >= 6 && age <= 17) {
//     console.log("child discount");
// } else if (age >= 18 && age <= 26) {
//     console.log("student discount");
// } else if (age >= 27 && age <= 66) {
//     console.log("full price");
// } else {
//     console.log("senior citizen discount");
// }

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// console.log("The 5 largest countries in the world:")
// for(let i = 0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log("The 5 largest countries in the world:")
// for(let i = 0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries[i]);
// }
//The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.
// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.

// let dayOfMonth = 13
// let weekDay = "Friday"

// if(dayOfMonth === 13 && weekDay === "Friday"){
//     console.log("👻")
// }

// let hands = ["rock","paper","scissor"]

// function random(){
//     randomHand = Math.floor(Math.random()*hands.length)
//     return hands[randomHand]
    
// }
// console.log(random())

// let pet = ["dog","cat","monkey","snake","fish","pony"]

// function randomPet(){
//     randomPet = Math.floor(Math.random()*pet.length)
//     return pet[randomPet]
// }
// console.log(randomPet())

// let fruit = ["🍎","🍎","🍎","🍊","🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruit(){
//     for (let i = 0;i<fruit.length;i++){
//         if(fruit[i]==="🍎"){appleShelf.textContent+="🍎"}else if(fruit[i]==="🍊"){appleShelf.textContent+="🍊"}
//     }
// }
// sortFruit()

// let box = document.getElementById("box")
// box.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-14 days"
// shippingCost = 15
// shippingTime = "7-14 days"
// const fullPrice = basePrice - discount + shippingCost
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// let button = document.getElementById("buy")
// button.innerHTML += "<button onclick='buy()'>Buy:</button>" 
// function buy(){
//     button.innerHTML += "<p>Thank you for buying!</p>"
// }

// const recipient = "James"
// const sender = "Kenny"
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)

// localStorage.setItem("myLeads","")
// console.log(localStorage.getItem("myLeads"))
// console.log(localStorage.clear())

// myLeads = JSON.parse(myLeads)

// myLeads.push("google.com","wikipedia.com")

// myLeads =JSON.stringify(myLeads)

// localStorage.setItem("myLeads",JSON.stringify(myLeads))

// console.log(typeof myLeads)