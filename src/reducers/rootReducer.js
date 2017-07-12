import { combineReducers } from 'redux';
import StudentReducer from './studentReducer';
import SelectedStudent from './SelectedStudentReducer';
import TimerReducer from './TimerReducer';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
	students: StudentReducer,
	weather: WeatherReducer
	// selectedStudent: SelectedStudent
	// timer: TimerReducer

});

export default rootReducer;