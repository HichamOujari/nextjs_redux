import {createStore,applyMiddleware} from "redux"
import  {useMemo} from "react"
import {composeWithDevTools,app}  from "redux-devtools-extension"

let store 

const initialState = {
    count:0,
    updateBy:null
}

const reducer =(state = initialState,action)=>{
    switch(action.type){
        case "+":return {
            ...state,
            count:state.count+1,
            updateBy:action.by
        }
        case "-":return {
            ...state,
            count:state.count-1,
            updateBy:action.by
        }
        case "RESET":return {
            ...state,
            count:0,
            updateBy:action.by
        }
        default: return state
    }
}

function initStore(preloadedState = initialState){
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export function initializeState(preloadedState){
    let _store = store ?? initStore(preloadedState)

    if(preloadedState && store){
        _store = initStore({
                ...store.getStore(),
            ...preloadedState
        })
        store = undefined
    }

    if(typeof window === "undefined") return _store
    if(!store) store = _store
    return _store
}

export function useStore(initialState){
    const store = useMemo(()=> initializeState(initialState,[initialState]))
    return store
}