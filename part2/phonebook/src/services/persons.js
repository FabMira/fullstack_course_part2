import axios from 'axios'
const baseURL = '/api/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObject => {
    return axios.post(baseURL, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseURL}/${id}`, newObject)
}

const erase = (id, person) => {
    return axios.delete(`${baseURL}/${id}`, person)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    erase: erase
}