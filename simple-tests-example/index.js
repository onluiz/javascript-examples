let state = {
    pagination: {
        perPage: 5,
        page: 0,
        count: 0,
        hasMore: true
    },
    logs: [{
        _id: 2,
        description: 'item in state'
    }]
}

const action = {
    type: 'TEST',
    logs: [
        {
            _id: 1,
            description: 'test 1'
        }
    ]
}

//opção 1- NOK
let changeState = () => {
    switch (action.type) {
        case 'TEST':
            state.logs.push.apply(state.logs, action.logs)
            return state
        default:
            return state
    }
}
let newArra1 = changeState()
console.log(newArra1)

//opção 2 - OK
//state.logs.push.apply(state.logs, action.logs)

let newArray = {
    ...state, logs: action.logs
}