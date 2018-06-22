'use strict';

import actions from '../actionTypes';
import * as hibp from 'hibp';
import sha1 from 'sha1';

export const acceptUserInput = (value) => ({
	type: actions.ACCEPT_USER_INPUT,
	payload: value
});

export const showOccurenceResult = (value) => ({
	type: actions.SHOW_OCCURANCE_RESULT,
	payload: value
});

export const showError = (error) => ({
	type: actions.SHOW_ERROR,
	payload: error
});

export const showLoader = () => ({
	type: actions.SHOW_LOADER
});

export const checkPassWord = () => async(dispatch, getState) => {
	dispatch(showLoader());
	const {userPassword} = getState();
	const shad = sha1(userPassword);
	const firstFive = shad.substr(0, 5);
	const rest = shad.substr(5).toUpperCase();

	try {
		const foundSuffixes = await hibp.pwnedPasswordRange(firstFive);
		const userSuffix = foundSuffixes.find(found => found.suffix === rest);
		const count = userSuffix ? userSuffix.count : '0';

		dispatch(showOccurenceResult(count));
	} catch (error) {
		dispatch(showError(error));
	}
};
