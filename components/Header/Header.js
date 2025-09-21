/** @format */

import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import HeaderStyled from './Header.styled';

export default function Header(props) {
	return (
		<header className='header'>
			<style jsx>{HeaderStyled}</style>
			<Head>
				<title>{props.title}</title>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
				></link>
			</Head>
			<Link href='/'>
				<a>
					<Image alt='Logo' src='/img/logo.svg' width={150} height={50} />
				</a>
			</Link>
		</header>
	);
}
