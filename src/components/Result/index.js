"use strict";

import SnackbarContent from '@material-ui/core/SnackbarContent'

export default ({count}) => {
	if (!count) {
		return null;
	}

	return (
		<div>
			<SnackbarContent
				message={`Введенный пароль был скомпрометирован ${count} раз.`}
			/>
			<style jsx>
				{`
					padding-top: 20px;
				`}
			</style>
		</div>
	)
}