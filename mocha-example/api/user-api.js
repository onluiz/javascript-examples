const api = require('./api')

module.exports = {
    save(user) {
        return api.doPost('/users', user).then((res) => {
            return res.status
        })
    },
    findAll() {
        return api.doGet('/users').then((res) => {
            return res.data
        })
    }
}