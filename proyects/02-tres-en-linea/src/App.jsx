import { useState, useEffect } from 'react'

import { Square } from './components/Square.jsx'
import { TURNS } from './contstants.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { checkWinner, checkEndGame } from './logic/board.js'
import { saveGameToStorage, resetGameToStorage } from './logic/storage/index.js'
import { ListWinners } from './components/ListWinners.jsx'
function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const [listWinners, setListWinners] = useState(() => {
    const listWinnersStorage = window.localStorage.getItem('listWinners')
    if (listWinnersStorage) return JSON.parse(listWinnersStorage)
    return Array()

  })
  const updateListWinners = (winner) => {

    const newListWinners = [...listWinners]
    newListWinners.push(`Ganador: ${winner}`)

    window.localStorage.setItem('listWinners', JSON.stringify(newListWinners))
    setListWinners(newListWinners)

  }

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      turn: newTurn,
      board: newBoard
    })

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      updateListWinners(newWinner)
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }


  useEffect(() => {

  }, [winner])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameToStorage()
  }
  return (
    <div className='container'>

      <ListWinners listWinners={listWinners} />

      <div className='board'>

        <h1>Tres en línea</h1>
        <button onClick={resetGame}>Empezar de Nuevo</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}>
                  {square}
                </Square>
              )
            }
            )
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
          <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        </section>

        <WinnerModal winner={winner} resetGame={resetGame} />
      </div>
    </div>
  )
}

export default App
