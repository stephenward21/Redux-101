import React, { Component } from 'react';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/FetchWeather';
import { connect } from 'react-redux';

class WeatherData extends Component{
	constructor(props) {
		super(props);
		// this.state ={
		// 	weatherData: []
		// }
		
	}

	componentDidMount() {
		this.props.fetchWeather();
	}
	
	render(){
		if (this.props.weatherData.main == undefined){
			return (<h1>Loading...</h1>)
		}
		return(
			<div>
				<h1> Atlanta Weather </h1>
				{this.props.weatherData.main.temp}&deg; F
			</div>

		)
	}

}

function mapStateToProps(state){
	return {
		weatherData: state.weather
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchWeather: fetchWeather
	}, dispatch)
}

var thingCreatedbyConnectThatKnowsAboutComponentAndReduxStuff = connect(mapStateToProps, mapDispatchToProps)(WeatherData)

export default thingCreatedbyConnectThatKnowsAboutComponentAndReduxStuff;