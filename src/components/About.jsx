import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import styles from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn(
					'up',
					'spring',
					0.5 * index,
					5
				)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] hover:shadow-card hover:ease-in-out"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col
					"
				>
					<img
						src={icon}
						alt={title}
						className="w-1/2 h-1/2 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p
					className={`${styles.sectionSubText} text-center`}
				>
					Introduction
				</p>
				<h2
					className={`${styles.sectionHeadText} text-center`}
				>
					Overview
				</h2>
			</motion.div>

			<div className="flex justify-center">
				<motion.p
					variants={fadeIn('', '', 0.3, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center"
				>
					I'm a Junior Developer with experiences
					in JavaScript, React (Native), Node,
					Express, and PostgreSQL. I'm creative,
					detail-oriented, and focused towards
					efficiency, scalability, and
					user-friendly solutions that solve
					real-world problems. Let's work together
					to bring your ideas to life!
				</motion.p>
			</div>

			<div
				name="services"
				className="mt-20 flex flex-wrap gap-10 justify-evenly"
			>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
