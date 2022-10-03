const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

function buyIcecream() {
	return {
		type: BUY_ICECREAM,
	};
}

// (precState, action) => newState

// const initialState = {
// 	numberOfCake: 10,
// 	numberOfIcecream: 20,
// };

const initialCakeState = {
	numberOfCake: 10,
};

const initialIceCreamState = {
	numberOfIcecream: 20,
};

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return {
// 				...state, // all other property will be here
// 				numberOfCake: state.numberOfCake - 1,
// 			};
// 		case BUY_ICECREAM:
// 			return {
// 				...state, // all other property will be here
// 				numberOfIcecream: state.numberOfIcecream - 1,
// 			};

// 		default:
// 			return state;
// 	}
// };

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state, // all other property will be here
				numberOfCake: state.numberOfCake - 1,
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state, // all other property will be here
				numberOfIcecream: state.numberOfIcecream - 1,
			};

		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});
console.log("-------", unsubscribe);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

unsubscribe();
