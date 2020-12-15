import { question as prompt } from 'readline-sync'
import wantsToPlayAgain from './wantsToPlayAgain'

function newGame(): void {
  console.log("I have picked a whole number between 1 and 10 (inclusive).")

  const secretNumber = Math.floor(Math.random() * 11)

  while (true) {
    const userInput = prompt("Guess what it is? \n> ")

    if (parseInt(userInput) === secretNumber) {
      console.log("That's right, well done - the number was", secretNumber)

      if (wantsToPlayAgain()) {
        return newGame()
      } else {
        console.log("Goodbye!")
        break
      }
    } else {
      console.log("Wrong! Try again?")
    }
  }
}

export default newGame