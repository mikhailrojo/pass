'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from '../../actions';

import Search from '../../components/Search';
import Result from '../../components/Result';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);

class SearchContainer extends React.Component {
	render() {
		const {
			checkPassWord,
			acceptUserInput,
			occurrence,
			isLoading
		} = this.props;

		return (
			<div>
				<Search onSubmit={checkPassWord} onChange={acceptUserInput} />
				{isLoading && <CircularProgress style={{marginTop: '10px'}}/>}
				<style jsx>
					{`
						display: flex;
						flex-direction: column;
						height: 100vh;
						align-items: center;
						transition: all 1s ease-in;
					`}
				</style>
				<Result count={occurrence} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
