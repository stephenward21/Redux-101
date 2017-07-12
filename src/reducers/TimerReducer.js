var TimerReducer = function(state = null, action){
	if (action.type == 'TIMER_TICK'){
		return action.payload;
	}else{
		return state;
	}

}

export default TimerReducer;