import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../src/reducers'

const store = createStore(reducer);

import SearchContainer from '../src/containers/SearchContainer';

export default () => (
	<Provider store={store}>
		<SearchContainer />
	</Provider>
);




