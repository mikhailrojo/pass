import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default ({onChange, onSubmit}) => (
	<div>
		<Input
			fullWidth
			autoFocus
			placeholder='Найти'
			onChange={onChange}
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