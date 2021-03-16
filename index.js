
const redux=require('redux')
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

//Actions
const BUY_CAKE='BUY_CAKE'

const BUY_ICECREAM='BUY_ICECREAM'

//Action producers...(objects)
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First Action'
    }
}

function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:'Second Action'
    }
}


// const initialState={
//     numOfCakes:10,
//     numOfIceCreams:20
// }

const initialCakeState={
    numOfCakes:10
}

const initialIceCreamState={
    numOfIceCreams:20
}

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//             case BUY_CAKE: return{
//                 ...state,
//                 numOfCakes:state.numOfCakes-1
//             }
//             case BUY_ICECREAM: return{
//                 ...state,
//                 numOfCakes:state.numOfIceCreams-1
//             }
//             default:return state
//     }
// }

           
const cakeReducer=(state=initialCakeState,action) => {
    switch(action.type){
            case BUY_CAKE: return{
                ...state,
                numOfCakes:state.numOfCakes-1
            }
            default:return state
    }
}
const iceCreamReducer=(state=initialIceCreamState,action) => {
    switch(action.type){
            case BUY_ICECREAM: return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
            default:return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))
console.log(store.getState())
const unSubscribe =store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unSubscribe()