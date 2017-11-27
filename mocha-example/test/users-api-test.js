require('dotenv').load()
const assert = require('assert');
const userApi = require('../api/user-api')
const names = require('../resources/names.json')

describe('/users route testing', () => {
    xit('#findAll', async () => {
        let users = await userApi.findAll()
        console.log(users)
    })

    xit('#saveOne', async () => {
        let user = {
            name: 'Luiz Alberto',
            username: 'onluiz',
            email: 'luiz.alberto1723@gmail.com',
            password: '123456789'
        }
        let res = await userApi.save(user)
    })

    xit('#saveMany', async () => {
        let user
        let name
        for(let i = 0; i < names.length; i++) {
            name = names[i]
            user = {
                name,
                username: name,
                email: name + '@gmail.com',
                password: Math.floor(Math.random() * 1000)
            }
            await userApi.save(user)
            console.log(`user number ${i} saved`)
        }
    })
})