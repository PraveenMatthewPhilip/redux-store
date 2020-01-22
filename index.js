const createStore = require('redux').createStore

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

const initialState = {
	cakes: 0,
	iceCream: 0
}
const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

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
