// reducers get state and action as params
// all reducers get EVERY action. the action object is in the action param
var SelectedStudent = function(state = "No one", action){
	console.log(action)
	if(action.type == 'PICK_STUDENT'){
		return action.payload;
	}
	// }else if(action.type == 'TIMER_TICK'){

	// 	return state;	
	// }
}

export default SelectedStudent;