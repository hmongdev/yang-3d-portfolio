import { github } from '../assets';
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import styles from '../styles';

const Works = () => {
	return (
		<>
			<motion.div
				name="projectsTitle"
				variants={textVariant()}
			>
				<p
					className={`${styles.sectionSubText} text-center`}
				>
					Stuff I Built
				</p>
				<h2
					className={`${styles.sectionHeadText} text-center`}
				>
					Projects
				</h2>
			</motion.div>
			<div className="flex justify-center text-center">
				<motion.p
					variants={fadeIn('', '', 0.3, 1)}
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					The following projects showcase my
					skills and experience.
				</motion.p>
			</div>
			<div
				name="projects"
				className="mt-20 flex flex-wrap gap-10 justify-evenly"
			>
				{projects.map((project, index) => (
					<ProjectCard
						key={project.title}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, 'works');
