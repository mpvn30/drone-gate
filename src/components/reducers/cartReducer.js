

const initialState = {
    items: [
        {id:1, name: "name", desc: "desc1", price: 100},
        {id:2, name: "name2", desc: "desc2", price: 200}
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;