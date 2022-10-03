const BUY_CAKE = "BUY_CAKE";

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

// (precState, action) => newState

const initialState = {
	numberOfCake: 10,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state, // all other property will be here
				numberOfCake: numberOfCake - 1,
			};

		default:
			return state;
	}
};
