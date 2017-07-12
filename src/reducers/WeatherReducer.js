export default function(state = [], action){
	switch(action.type){
		case "GET_WEATHER":
			return action.payload
		case "DoNothing":
			return state;
		default:
			return state;
	}

}