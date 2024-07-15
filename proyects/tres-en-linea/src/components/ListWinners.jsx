import PropTypes from 'prop-types'

export const ListWinners = ({ listWinners = Array() }) => {

    if (listWinners.length < 0) return null
    console.log(listWinners)

    const endList = listWinners.slice(-10, listWinners.length)
    return (

        <aside className="container-list-winners">
            <h2>Lista de Ganadores</h2>
            <ul className="list-winners">
                {
                    endList.map((winner, index) => {
                        return (
                            <li key={index} className='item-list'>
                                {winner}
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </aside>
    )

}

ListWinners.propTypes = {
    listWinners: PropTypes.array
}