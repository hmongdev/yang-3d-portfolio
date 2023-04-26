import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { ylogo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');

	return (
		<nav
			className={`${styles.paddingX} border-2 w-full items-center py-5 top-0 fixed z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={ylogo}
						alt="ylogo"
						className="w-20 object-contain
						"
					/>
					<p className="text-white text-[18px] font-bold cursor-pointer tracking-widest">
						Steve Yang
						<span className="text-red-500 sm:block hidden">
							Frontend Developer
						</span>
					</p>
				</Link>
				<ul className="hidden sm:flex flex-row gap-10 list-none">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active ===
								link.title
									? 'text-white'
									: 'text-secondary hover:text-red-500 text-[18px] font-medium cursor-pointer hover:underline underline-offset-8 hover:scale-110'
							}`}
							onClick={() =>
								setActive(
									link.title
								)
							}
						>
							<a href={`${link.id}`}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
