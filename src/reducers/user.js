const initialState = {
    name: '',
    email: '',
    id: null,
    loggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                name: action.user.name,
                email: action.user.email,
                id: action.user.id,
                loggedIn: true
            }

        default:
            return state;
    }
}

export default userReducer