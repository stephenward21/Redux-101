import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudentAction';
import { bindActionCreators } from 'redux';
import Timer from '../actions/TimerAction';

class ReduxStudents extends Component{
	componentDidMount() {
		// setInterval(()=>{
		// 	this.props.timerAction();
		// }, 1000)
	}
	render(){
		// console.log(this.props.students);
		var studentArray = [];
		this.props.students.map((student,index)=>{
			studentArray.push(
				<li 
					key={index} 
					onClick={()=> {this.props.selectStudent(student)}}
				>
						{student}
				</li>
			)
		})
		return(
			<div>
				<h1>This is ReduxStudents</h1>
				{studentArray}
				<hr />
				{this.props.selectedStudent} is selected.
				<hr />
				{this.props.timerAction} 
			</div>
		)
	}

}

function mapStateToProps(state){
	return {

		students: state.students,
		selectedStudent: state.selectedStudent,
		timer: state.timer
	}
}

function mapDispatchToProps(dispatch){
	// bindActionCreators came from above
	return bindActionCreators({
		selectStudent: SelectStudent,
		timerAction: Timer
	}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ReduxStudents);