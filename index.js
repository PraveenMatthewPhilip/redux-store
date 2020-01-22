const redux = require('redux')
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const ADD_CAKE = 'ADD_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const ADD_ICECREAM = 'ADD_ICECREAM';


const buyCake =  (amount = 1) => {
	return {
		type: BUY_CAKE,
		payload: {
			amount
		}
	}
}

const addCake = (amount) => {
	return {
		type: ADD_CAKE,
		payload: {
			amount
		}
	}
}

const buyIceCream =  (amount = 1) => {
	return {
		type: BUY_ICECREAM,
		payload: {
			amount
		}
	}
}

const addIceCream = (amount) => {
	return {
		type: ADD_ICECREAM,
		payload: {
			amount
		}
	}
}

const cakeInitialState = {
	cakes: 0
}

const iceCreamInitialState = {
	iceCream: 0
}
const cakeReducer = (state = cakeInitialState, action) => {
	switch(action.type){
		case BUY_CAKE:
		return {
			...state,
			cakes: state.cakes - action.payload.amount
		}
		case ADD_CAKE:
		return {
			...state,
			cakes: state.cakes + action.payload.amount
		}
		default: 
		return state
	}
}


const iceCreamReducer = (state = iceCreamInitialState, action) => {
	switch(action.type){
		case BUY_ICECREAM:
		return {
			...state,
			iceCream: state.iceCream - action.payload.amount
		}
		case ADD_ICECREAM:
		return {
			...state,
			iceCream: state.iceCream + action.payload.amount
		}
		default: 
		return state
	}
}

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
})
const store = createStore(rootReducer);

store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(addCake(10))
store.dispatch(addIceCream(10))
store.dispatch(buyCake())
store.dispatch(addIceCream(10))
store.dispatch(addCake(10))
store.dispatch(buyIceCream(10))
store.dispatch(buyCake())

store.dispatch(buyCake())
