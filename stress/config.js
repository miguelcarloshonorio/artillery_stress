'use-strict';

module.exports = {
    beforeRequest: beforeRequest,
};


const token = 's%3AYl9u2uRI9tQn0s25OVQ97ofvU6RKqYgp.I05%2Fv3UpzLLcJwgg0Hu%2BDvHcBo7l4MNljU%2FrlmfSnsA';

function beforeRequest(requestParams, context, ee, next) {
    // Call your OAuth client, and after you obtain token you can assign it to requestParams Authorization header
    requestParams.headers.Authorization = `Bearer + ${token}`

    return next(); // MUST be called for the scenario to continue
}