import { CONSTANTS } from '../../../config'

//user
export const getPersistedUser = () => {
    return JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_USER_KEY))
}
  
export const removePersistedUser = () => {
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_USER_KEY)
}

export const persistUser = (user) => {
    removePersistedUser()
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user))
}

//username (to prefill in the login form)
export const getPersistedUsername = () => {
    return localStorage.getItem(CONSTANTS.LOCAL_STORAGE_USERNAME_KEY)
}

export const removePersistedUsername = () => {
    localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_USERNAME_KEY)
}
export const persistUsername = (username) => {
    removePersistedUsername()
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_USERNAME_KEY, username)
}

//agbs accepted 
export const persistAgbAccepted = () => {
    localStorage.setItem(CONSTANTS.LOCAL_STORAGE_AGB_ACCEPTED_KEY, 'true')
}

export const getPersistedAgbAccepted = () => {
    const storageEntry = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_AGB_ACCEPTED_KEY))
    return storageEntry === null ? false : storageEntry
}
