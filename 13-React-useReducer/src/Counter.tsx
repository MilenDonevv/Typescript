import { ReactNode, useState, useReducer } from 'react'



const initState = { count: 0 }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE
}

const reduced = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            throw new Error('Opaa nqkva greshka ia tuka')
    }
}

type ChildrenType = {
    children: (num: number) => ReactNode
}


const Counter = ({ children }: ChildrenType) => {
    // const [count, setCount] = useState<number>(1)
    const [state, dispatch] = useReducer(reduced, initState)

    const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })

    return (
        <>
            {/* <h1>{children(count)}</h1> */}
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>

        </>
    )
}

export default Counter
