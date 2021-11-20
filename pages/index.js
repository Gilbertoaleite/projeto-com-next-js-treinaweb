/** @format */

import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Index() {
	return (
		<div>
			<Head />

			<Header />

			<main>
				<figure className='recipe-card'>
					<Link href='/receitas/doces/brigadeiro'>
						<a>
							<img
								className='recipe-picture'
								src='https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg'
								alt='foto brigadeiro'
							/>
						</a>
					</Link>
					<div className='recipe-category'>Doces</div>
					<figcaption className='recipe-name'>Brigadeiro</figcaption>
				</figure>
				<figure className='recipe-card'>
					<Link href='/receitas/doces/brigadeiro'>
						<a>
							<img
								className='recipe-picture'
								src='https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg'
								alt='foto brigadeiro'
							/>
						</a>
					</Link>
					<div className='recipe-category'>Doces</div>
					<figcaption className='recipe-name'>Brigadeiro</figcaption>
				</figure>
				<figure className='recipe-card'>
					<Link href='/receitas/doces/brigadeiro'>
						<a>
							<img
								className='recipe-picture'
								src='https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg'
								alt='foto brigadeiro'
							/>
						</a>
					</Link>
					<div className='recipe-category'>Doces</div>
					<figcaption className='recipe-name'>Brigadeiro</figcaption>
				</figure>
			</main>

			<Footer />
		</div>
	);
}
