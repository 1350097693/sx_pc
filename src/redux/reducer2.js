export default function counter(state = {}, action) {
    switch (action.type) {
        case 'FETCHAPICOUNT_SUC':
            return {
                ...state,
                count: action.response
            };
        default:
            return state;
    }
}