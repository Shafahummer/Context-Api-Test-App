
export const initialState = []

export const myReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { title: action.payload }]
        default:
            return state;
    }
}