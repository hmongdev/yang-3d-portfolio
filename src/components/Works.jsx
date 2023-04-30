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
					skills and experience. <br />
					Click on the card to open its source
					code.
				</motion.p>
			</div>
			<div
				name="projects"
				className="mt-20 flex flex-wrap col-span-2 gap-10 justify-evenly"
			>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => (
	<motion.div
		variants={fadeIn('right', 'spring', 0.5 * index, 5)}
		className="green-pink-gradient p-[2px] rounded-[20px] hover:shadow-card"
	>
		<div
			name="githubContainer"
			className="absolute inset-0 flex justify-end m-3 card-img_hover"
		>
			<div
				name="githubButton"
				className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
					cursor-pointer"
				onClick={() =>
					window.open(source_code_link, '_blank')
				}
			>
				<img
					src={github}
					alt="github"
					className="object-contain hover:bg-red-400 rounded-full"
				/>
			</div>
		</div>

		<div
			name="projectContent"
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[420px]"
		>
			<h3 className="text-white text-[1rem] text-center mb-4 tracking-widest">
				{name}
			</h3>
			<img
				src={image}
				alt={name}
				className="w-full h-full object-cover rounded-2xl"
			/>
			<h6 className="mt-5 text-center">{description}</h6>
			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>
		</div>
	</motion.div>
);

export default SectionWrapper(Works, 'works');
