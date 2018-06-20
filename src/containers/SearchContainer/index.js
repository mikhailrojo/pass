'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as hibp from 'hibp';
import sha1 from 'sha1';

import * as ActionCreators from '../../actions';

import Search from '../../components/Search';


const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);

const checkOccurency = (str) => {
	const shad = sha1(str);
	const firstFive = shad.substr(0, 5);
	const rest = shad.substr(5).toUpperCase();
	hibp
		.pwnedPasswordRange(firstFive)
		.then(data => {

			data.forEach(i => {

				if (i.suffix === rest) {
					console.log(i);
				}
			});

		});
};

class SearchContainer extends React.Component {
	onChange = (e) => {
		this.value = e.target.value;
	};

	onSubmit = () => {
		checkOccurency(this.value)
	};

	render() {
		return (
			<div>
				<Search onSubmit={this.onSubmit} onChange={this.onChange}/>
				<style jsx>
					{`
						display: flex;
						height: 100vh;
						justify-content: center;
						align-items: center;
					`}
				</style>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
