const assert = require('assert');

xdescribe('learning mocha', () => {
    it('execute a simple test', () => {
        console.log('testing')
    })

    it('should return 4 from a sum', () => {
        let expected = 4
        let result = 4
        assert.equal(expected, result)
    })
})