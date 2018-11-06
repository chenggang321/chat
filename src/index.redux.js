// import {createStore} from 'redux'

// types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// reducer
export function counter(state = 10, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

// let store = createStore(counter)

// store.subscribe(()=>console.log(store.getState()))

// action creator
export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function async() {
    return dispatch => {
        setTimeout(function () {
            dispatch(increment())
        }, 2000)
    }
}