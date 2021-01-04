import React, { useReducer } from 'react'
import { PokeReducer } from '../pokeReducer';
import PokeStateContext from '../pokeStateContext';
import PokeDispatchContext from '../pokeDispatchContext';
const initialState = {
    pokemon: {},
    about: {},
}
const PokeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(PokeReducer, initialState)
    return (
        <PokeStateContext.Provider value={state}>
          <PokeDispatchContext.Provider value={dispatch}>
            {children}
          </PokeDispatchContext.Provider>
        </PokeStateContext.Provider>
      )
}
export default PokeContextProvider;