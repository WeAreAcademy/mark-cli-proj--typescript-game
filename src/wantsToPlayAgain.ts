import { question as prompt } from 'readline-sync';

function wantsToPlayAgain(): boolean {
  const userInput = prompt('Play again? [Y/N] \n> ')
  return userInput.toUpperCase() === 'Y'
}

export default wantsToPlayAgain