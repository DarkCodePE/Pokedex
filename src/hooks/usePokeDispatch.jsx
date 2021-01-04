import React from 'react'
import PokeDispatchContext from '../contexts/pokemon/pokeDispatchContext'

const usePokeDispatch = () => {
    const context = React.useContext(PokeDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}
 
export default usePokeDispatch;