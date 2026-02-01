import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS, asyncActionCreator } from './countReducer';

const Counter = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log("🚀 ~ Counter ~ state:", state)

    const { count } = state;

    // async (dispatch) => {
    //     const response = await new Promise((res) =>
    //       setTimeout(() => {
    //         res(payload);
    //       }, 2000),
    //     );
    //     dispatch(incrementActionCreator(response));
    //   }
    
    const incrementCount = async () => {
        // imagine we're getting this value from an API after 2 seconds
        // dispatch(asyncActionCreator(1))
        dispatch(asyncActionCreator(1))
    };
    const decrementCount = () => {
        dispatch({ type: ACTIONS.DECREMENT, payload: 1 })
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </>

    )
}

export default Counter