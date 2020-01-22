const createStore= require('redux').createStore

const BUY_CAKE= 'BUY_CAKE';
const ADD_CAKE= 'ADD_CAKE';

const buyCake =  () => {
	return {
		type: BUY_CAKE,
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

const initialState = {
	cakes: 10
}
const reducer = (state = initialState, action) => {
	switch(action.type){
		case BUY_CAKE:
		return {
			...state,
			cakes: state.cakes - 1
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

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(buyCake())

store.dispatch(addCake(10))

store.dispatch(buyCake())

store.dispatch(buyCake())
