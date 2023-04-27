import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
import { navLinks } from '../constants/index';
import { ylogo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			name="navigationContainer"
			className={`${styles.paddingX} w-[100%] items-center py-5 top-0 fixed z-20 bg-primary`}
		>
			<div
				name="navigationContent"
				className="w-full flex justify-between items-center max-w-7xl mx-auto"
			>
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
					<p
						name="lastName"
						className="text-white tracking-widest text-[18px] font-bold cursor-pointer"
					>
						Yang&nbsp;
						<span
							name="jobPosition"
							className="text-red-500 inline-block"
						>
							Frontend Developer
						</span>
					</p>
				</Link>

				<ul className="hidden sm:flex flex-row gap-10 list-none">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className="text-secondary hover:text-white text-[1.1rem] font-bold cursor-pointer hover:underline underline-offset-8 decoration-4"
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

				<div
					name="mobileIcon"
					className="sm:hidden flex justify-end items-center"
				>
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() =>
							setToggle(!toggle)
						}
					/>

					<div
						name="mobileMenuContainer"
						className={`${
							!toggle
								? 'hidden'
								: 'flex'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[35%] justify-center z-10 rounded-xl border-2`}
					>
						<ul
							name="mobileMenuContent"
							className="list-none flex justify-start items-start flex-col gap-4"
						>
							{navLinks.map(
								(link) => (
									<li
										name="mobileMenuLink"
										key={
											link.id
										}
										className="text-secondary hover:text-white text-[1.1rem] font-bold cursor-pointer hover:underline underline-offset-8 decoration-4"
										onClick={() =>
											setActive(
												link.title
											)
										}
									>
										<a
											href={`${link.id}`}
										>
											{
												link.title
											}
										</a>
									</li>
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
