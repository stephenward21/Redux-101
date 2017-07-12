var SelectStudent = function(student){
	console.log(student);
	return {
		type: "PICK_STUDENT",
		payload: student
	}
}

export default SelectStudent;