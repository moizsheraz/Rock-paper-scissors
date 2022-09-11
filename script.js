console.log("Welcome to the GAME")
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
var UserEntry;
btn1.addEventListener('click', function() {
  UserEntry = "S"
})
btn2.addEventListener('click', function() {
  UserEntry = "W"
})
btn3.addEventListener('click', function() {
  UserEntry = "G"
})
let Game = ['S', 'W', 'G'];
let Game_Guess = Game[Math.floor(Math.random() * Game.length)];
console.log(Game_Guess)


while (UserEntry != Game_Guess) {
  console.log('Entries are same Try Again')


  if (Game_Guess == 'S' && UserEntry == "W") {
    console.log("You are Winner")
  }
  else if (Game_Guess === 'S' && UserEntry == "G") {
    console.log("You are Winner ")
  }
  else if (Game_Guess === 'W' && UserEntry == "S") {
    console.log("Sorry you  lose Try again!")
  }
  else if (Game_Guess === 'W' && UserEntry == "G") {
    console.log("Sorry you  lose Try again!")
  }
  else if (Game_Guess === 'G' && UserEntry == "S") {
    console.log("Sorry you  lose Try again!")
  }
  else if (Game_Guess === 'G' && UserEntry == "W") {
    console.log("You are Winner")
  }

}
