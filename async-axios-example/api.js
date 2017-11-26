const axios = require('axios')

module.exports.doGet = async (apiRoute) => {
    return await axios.get(`${process.env.API_HOST}${apiRoute}`)
}

module.exports.doPost = async (apiRoute, params) => {
    return await axios.post(`${process.env.API_HOST}${apiRoute}`, params)
}

module.exports.doDelete = async (apiRoute, id) => {
    return await axios.delete(`${process.env.API_HOST}${apiRoute}`, id)
}

module.exports.doPut = async (apiRoute, obj) => {
    return await axios.put(`${process.env.API_HOST}${apiRoute}`,obj)
}