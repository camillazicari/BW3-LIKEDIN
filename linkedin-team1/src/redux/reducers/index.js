const initialState = {
    profile: {},
    experience: [],
    profiles: [],
    jobs: [],
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                profile: action.payload
            }

        case 'GET_EXPERIENCE':
            return {
                ...state,
                experience: action.payload
            }

        case 'GET_PROFILES':
            return {
                ...state,
                profiles: action.payload
            }

        case 'GET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }

        default: return state
    }
}


export default mainReducer