export default function data(state = {}, action) {
    switch (action.type) {
        
        case 'SWITCHRIGHT':
            console.log(action)
            return {
                ...state,
                rightType: action.rightType
            };
        case 'FETCHAPI_SUC':
            return {
                ...state,
                data: action.response
            };
        case 'ADDAPI_SUC':
            return {
                ...state,
            };
        case 'DELETEAPI_SUC':
            return {
                ...state,
            };
        case 'UPDATAAPI':
            return {
                ...state,
            };
        case 'FETCHAPICOUNT_SUC':
            return {
                ...state,
                count: action.response[0]['count(*)']
            };
        default:
            return state;
    }
}