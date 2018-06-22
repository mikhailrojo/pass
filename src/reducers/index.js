"use strict";

import actions from '../actionTypes';

export default (state = {}, action) => {
	console.log(action);
	switch(action.type) {
		case actions.ACCEPT_USER_INPUT: {
			return {
				...state,
				userPassword: action.payload
			}
		}
		case actions.SHOW_LOADER: {
			return {
				...state,
				isLoading: true,
				occurrence: null
			};
		}
		case actions.SHOW_OCCURANCE_RESULT: {
			console.log('show occ')
			return {
				...state,
				isLoading: false,
				occurrence: action.payload
			};
		}
		case actions.SHOW_ERROR: {
			return {
				...state,
				error: action.payload
			};
		}
		default: {
			return state;
		}
	}

};