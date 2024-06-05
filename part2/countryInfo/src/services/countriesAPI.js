import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries'

const getAll = () => {
    return axios.get(`${baseURL}/api/all`)
}

const getSpecific = name => {
    return axios.get(`${baseURL}/api/name/${name}`)
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
    getSpecific: getSpecific,
    create: create,
    update: update,
    erase: erase
}