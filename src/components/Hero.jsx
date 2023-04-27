import { motion } from 'framer-motion';
import styles from '../styles';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
	return (
		<section
			name="heroSection"
			className="relative w-full h-screen mx-auto border-2 border-red-600"
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px]`}
			></div>
		</section>
	);
};

export default Hero;
