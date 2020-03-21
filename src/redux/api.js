import axios from 'axios';

export default store => next => action => {

    if (typeof action === 'undefined') {
        return next(action)
    }

    let { endpoint,params,method} = action
    console.log(action)
    const { type } = action
    if (!endpoint) {
        return next(action)
    }
    endpoint='http://localhost:8000'+endpoint

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }
    function actionWith(data) {
        const finalAction = Object.assign({}, data)
        return finalAction
    }

    const requestType = `${type}_REQ`
    const successType = `${type}_SUC`
    const failureType = `${type}_FAI`
    next(actionWith({ type: requestType }))

    return callApi(endpoint,params,method).then(
        response => next(actionWith({
            response: response.data,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    )
}
function callApi(endpoint, params,method) {
    return axios({
        method:method,
        url:endpoint,
        params:params,
      })

}