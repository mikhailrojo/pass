"use strict";

import SnackbarContent from '@material-ui/core/SnackbarContent'

export default ({count, error}) => {
	if (!count) {
		return null;
	}
 
	return (
		<div>
			<SnackbarContent
				message={`Введенный пароль был скомпрометирован ${count} раз.`}
			/>
			{error && <SnackbarContent
				style={{backgroundColor:'#d32f2f'}}
				message={`Ошибка: ${error}`}
			/>}
			<style jsx>
				{`
					padding-top: 20px;
				`}
			</style>
		</div>
	)
}