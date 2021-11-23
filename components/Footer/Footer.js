/** @format */

import HeaderStyled from '../Header/Header.styled';
export default function Footer() {
	return (
		<footer className='footer'>
			<style jsx>{HeaderStyled}</style>
			&copy; TreinaCook - Desenvolvido por:{' '}
			<a
				title='Meu Portfólio'
				target='_blank'
				rel='noreferrer noopener'
				href='https://gilbertoaleite-portfolio.netlify.app/'
			>
				Gilberto A Leite{' '}
			</a>
		</footer>
	);
}
