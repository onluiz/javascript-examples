require('dotenv').load()
const assert = require('assert');
const api = require('../api')
const logApi = require('../log-api')

describe('Log', () => {

    xdescribe('#findAll', () => {
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
        xit('should save a log', async () => {
            let log = {
                description: 'saving a log from mocha tests',
                date: new Date(),
                idUser: 1
            }
            let status = await logApi.save(log)
            assert.equal(status, '200')
        })
        xit('should save lots of logs', async () => {
            let log
            let status
            for(let i = 0; i < 10000; i++) {
                log = {
                    description: (i + ' ' + new Date() + ' ramdom log generator ' + i),
                    date: new Date(),
                    idUser: 1
                }
                status = await logApi.save(log)
                console.log(i + '   ' + status)
            }
        })
    })

})
