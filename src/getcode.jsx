import React from 'react';
import axios from 'axios';

import './getcode.css';

class Getcode extends React.Component {

	state = { advice: '' };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios.get('https://api.adviceslip.com/advice')
		.then((response) => {
			const { advice } = response.data.slip;

			this.setState({ advice });
		})

		.catch ((error) => {
			console.log(error);
		})
	}

	render() {
		const { advice } = this.state;

		return (
			<div>
				<h1>Get Your Quote</h1>
			<div className="app">
				<div className="anything">
					<h3 className="heading">
					{this.state.advice}
					</h3>
					<button className="button" onClick=
					{this.fetchAdvice}>
						<span>Give Me Advice</span>
					</button>
				</div>
			</div>
			</div>
		);
	}
}

export default Getcode;
