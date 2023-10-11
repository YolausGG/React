
import { WINNER_COMBOS } from "../contstants"

export const checkWinner = (boardToCheck) => {
  
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheck[a] &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ) {

      console.log(`winner: ${boardToCheck[a]}`)

      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (checkBoard) => {

  return checkBoard.every((square) => square != null)

  /* let count = 0;
   for(let i of checkBoard){
     if(i != null){
       count++
     }
   }
   if(count > 8){
     return true
   }*/
}

