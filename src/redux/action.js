export function switchRight(rightType) {
    return{
        type:'SWITCHRIGHT',
        rightType
    }
}
export function fetchAPI(endpoint,params) {
    return {
        type:'FETCHAPI',
        endpoint:endpoint,
        params:params,
        method:'get'
    }
}
export function fetchAPICount(endpoint,params) {
    return {
        type:'FETCHAPICOUNT',
        endpoint:endpoint,
        params:params,
        method:'get'
    }
}
export function addAPI(endpoint,params) {
    return {
        type:'ADDAPI',
        endpoint:endpoint,
        params:params,
        method:'post'
    }
}
export function deleteAPI(endpoint,params) {
    return {
        type:'DELETEAPI',
        endpoint:endpoint,
        params:params,
        method:'post'
    }
}
export function updataAPI(endpoint,params) {
    return {
        type:'UPDATAAPI',
        endpoint:endpoint,
        params:params,
        method:'post'
    }
}