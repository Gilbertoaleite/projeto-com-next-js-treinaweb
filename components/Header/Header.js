/** @format */
import Link from 'next/link';

export default function Header() {
	return (
		<header className='header'>
			<Link href='/'>
				<a>
					<img src='/img/logo.svg' alt='Logo TreinaCook' />
				</a>
			</Link>
		</header>
	);
}
