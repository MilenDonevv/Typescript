import { ChangeEvent, createContext, ReactElement, useReducer, useCallback, useContext } from "react";


type StateType = {
    count: number;
    text: string;
}

export const initState: StateType = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, text: action.payload ?? '' } // ?? ''  --> if null, put ''
        default:
            throw new Error('Opaa nqkva greshka ia tuka')
    }
}

// custom hook
const useCounterContext = (initState: StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const increment = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
    const decrement = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])
    const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
    }, [])

    return { state, increment, decrement, handleTextInput }
}

// using the ReturnType utility
type UseCounterContextType = ReturnType<typeof useCounterContext>

const initContextState: UseCounterContextType = {
    state: initState,
    increment: () => { },
    decrement: () => { },
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { },

}

export const CounterContext = createContext<UseCounterContextType>(initContextState)

type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

export const CounterProvider = ({ children, ...initState }: ChildrenType & StateType): ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initState)}>{children}</CounterContext.Provider>
    )
}

type UseCounterHookType = {
    count: number, 
    increment: () => void,
    decrement: () => void,
}

// first custom hook
export const useCounter = (): UseCounterHookType => {
    const { state: {count}, increment, decrement } = useContext(CounterContext)

    return { count, increment, decrement }
}

type useCounterTextHookType = {
    text: string,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useCounterText = (): useCounterTextHookType => {
    const { state: {text}, handleTextInput } = useContext(CounterContext)

    return { text, handleTextInput }
}