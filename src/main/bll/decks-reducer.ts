
type ActionType = any


const initialState = {
    //listOfDecks:      захардкодить список колод
}

export const decksReducer = (state = initialState,action:ActionType) => {
    switch (action.type) {
        default:
            return state
    }
}