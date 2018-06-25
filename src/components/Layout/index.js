import Head from 'next/head'

export default class extends React.Component {
	ym() {
		return (
			`<script src='https://mc.yandex.ru/metrika/watch.js' type='text/javascript'></script>
			<script type='text/javascript'>
				  try {
						new Ya.Metrika({
						id:49370503,
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true,
						trackHash:true
						});
				  } catch(e) { }
			</script>`
		);
	}

	render() {

		const {children} = this.props;
		return (
			<div>
				<Head>
					<title>Проверка уникальности пароля</title>
					<link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
					<meta name="description" content="Проверка пароля на уникальность. Кажется что наши пароли уникальны, проверьте находится ли пароль в базе утекших" />
					<meta name="keywords" content="Проверка уникальности пароля, проверить надежность пароля, надежные пароли." />
					<meta charset="UTF-8" />
				</Head>
				{children}
				<div dangerouslySetInnerHTML={{__html: this.ym()}}/>
			</div>
		);
	}
}