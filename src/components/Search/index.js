'use strict';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default class extends React.Component {
	onChange = (e) => {
		this.props.onChange(e.target.value);
	};

	render() {
		const {onSubmit} = this.props;

		return (
			<div>
				<Input
					fullWidth
					autoFocus
					placeholder='Проверить надеждность пароля'
					onChange={this.onChange}
				/>
				<Button
					color='primary'
					onClick={onSubmit}
				>
					Найти
				</Button>
				<style jsx>
					{`
					width: 40%;
					display: flex;
					`}
				</style>
			</div>
		);
	}
}