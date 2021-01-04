import React, { useReducer } from 'react'
import { GET_POKEMON, GET_ABOUT } from '../../../types'

export const PokeReducer = (state , action) => {
    switch (action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case GET_ABOUT:
            return {
                ...state,
                about: action.payload
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}