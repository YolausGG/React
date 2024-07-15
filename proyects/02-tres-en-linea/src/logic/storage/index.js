export const saveGameToStorage = ({ turn, board }) => {
    // Guardar datos en Local Storage
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}
export const resetGameToStorage = () => {
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
}

export const limpiarLocalStorage = () => {
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('listWinners')
}