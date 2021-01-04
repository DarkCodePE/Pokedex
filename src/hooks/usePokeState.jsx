import React from 'react'
import PokeStateContext from '../contexts/pokemon/pokeStateContext'

const usePokeState = () => {
    const context = React.useContext(PokeStateContext)
    if (context === undefined) {
      throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}
 
export default usePokeState;