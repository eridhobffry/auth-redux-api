import { getPersistedUser } from '../helpers/local_storage_helpers'

export const requestBuilder = (apiEndpoint, method = 'POST', payload = {}, useApiKey = true) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const applicationKey = process.env.REACT_APP_APPLICATION_KEY
    const url = process.env.REACT_APP_API_URL_BASE + apiEndpoint
    const persistedUser = getPersistedUser()

    let data = {
        method,
        headers: { 
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }

    data = method !== 'GET' ? {
        ...data,
        body: JSON.stringify(payload)
    } : data

    data.headers = useApiKey ? {
        ...data.headers,
        'X-API-Key': apiKey,
        'X-Application-Key': applicationKey
    } : data.headers

    data.headers = typeof persistedUser !== 'undefined' && persistedUser !== null ? {
        ...data.headers,
        'authorization': 'Bearer ' + persistedUser.accessToken
    } : data.headers
    
    return {
        data,
        url
    }
}