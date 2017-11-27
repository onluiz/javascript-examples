const api = require('./api')

module.exports = {
    save (log) {
        return api.doPost('/logs', log).then((res) => {
            return res.status
        })
    },
    findAll () {
       return api.doGet('/logs').then((res) => {
            return res.data
       })
    },
    paginated (perPage, page) {
        return api.doPost('/logs/search/paginated', {perPage, page}).then((res) => {
            return res.data
        })
    }
}