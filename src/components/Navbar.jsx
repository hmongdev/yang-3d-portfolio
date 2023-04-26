import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { ylogo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} border-2 w-full items-center py-5 top-0 fixed z-20 bg-primary`}
		>
			<div className="w-full border-2 flex justify-between items-center max-w-7xl mx-auto">
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
					<p className="text-white text-[20px] font-bold cursor-pointer tracking-widest">
						Steve Yang
						<span className="text-red-500 sm:block hidden">
							Frontend Developer
						</span>
					</p>
				</Link>

				<ul
					name="navLinksRight"
					className="hidden sm:flex flex-row gap-10 list-none border-green-500"
				>
					{navLinks.map((link) => (
						<li
							key={link.id}
							className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer hover:underline underline-offset-8 hover:scale-110 hover:ease-in-out"
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
					name="toggleIcons"
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

					{/* dropdown menu on small screen */}
					<div
						className={`${
							!toggle
								? 'hidden'
								: 'flex'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[35%] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-start items-start flex-col gap-4">
							{navLinks.map(
								(link) => (
									<li
										key={
											link.id
										}
										className={`${
											active ===
											link.title
												? 'text-white'
												: 'text-secondary hover:text-red-500 text-[18px] font-medium cursor-pointer hover:underline underline-offset-8 hover:scale-110'
										}`}
										onClick={() => {
											setToggle(
												!toggle
											);
											setActive(
												link.title
											);
										}}
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
