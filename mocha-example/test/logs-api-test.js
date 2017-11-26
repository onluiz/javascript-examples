require('dotenv').load()
const assert = require('assert');
const api = require('../api')
const logApi = require('../log-api')

describe('Log', () => {

    describe('#findAll', () => {
        it('should get all logs without errors', async () => {
            await logApi.findAll()
        })
        it('should verify if result is null', async () => {
            let logs = await logApi.findAll()
            assert.notEqual(logs, null)
            assert.notEqual(logs.lenght, 0)
        })
        it('sholf verify if result is empty', async () => {
            let logs = await logApi.findAll()
            console.log(logs)
            
        })
    })

    describe('#save', () => {
        it('should save a log', async () => {
            let log = {
                description: 'saving a log from mocha tests',
                date: new Date(),
                idUser: 1
            }
            let status = await logApi.save(log)
            assert.equal(status, '200')
        })
    })

})
