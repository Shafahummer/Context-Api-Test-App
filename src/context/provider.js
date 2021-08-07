import React, { useReducer } from 'react';
import { MyContext } from './context';
import { myReducer, initialState } from '../reducer/myReducer';

export const MyProvider = props => {
    const [state, dispatch] = useReducer(myReducer, initialState)

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyContext.Provider>
    )
}
