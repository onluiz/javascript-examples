require('./config')
var api = require('./api')

let log = {
    description: 'testing post api call',
    date: new Date(),
    idUser: 1
}

api.doPost('/logs', log).then((res) => {
    //console.log(res)
})

api.doGet('/logs').then((res) => {
    //console.log(res.data)
})

api.doGet('/logs/5a19fc26bc36732428065965').then((res) => {
    res.data.description = 'EDITED'
    api.doPut('/logs/5a19fc26bc36732428065965', res.data).then((res) => {
        //console.log(res)
    })

})

api.doDelete('/logs/5a19fad1bc36732428065955').then((res) => {
    //console.log(res)
})