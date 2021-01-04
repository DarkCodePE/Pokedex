import React,{ useContext }  from 'react'
import getDataPoke from '../services/getDataPoke';
import usePokeDispatch from '../hooks/usePokeDispatch';
import { GET_ABOUT } from '../types';
import PokeDispatchContext from '../contexts/pokemon/pokeDispatchContext';


const GetMultipleServicesData = (id, resource, type) => {
    console.log(id, resource, type)
    const categories = resource.map(function(data) {
        return getDataPoke({ resource: data, id })
    });

  /*   const dispatch = useContext(PokeDispatchContext)
 */
    Promise.all(categories).then(
        (data) => {
           /*  dispatch({
                type: 'GET_ABOUT',
                payload: { ...data[0], ...data[1] }
            }) */
        },
        reason => {
          console.log(reason);
        }
    );

}
 
export default GetMultipleServicesData;