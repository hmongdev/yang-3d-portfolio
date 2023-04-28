import React from 'react';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import styles from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
	return (
		<div name="cardContainer">
			<VerticalTimelineElement
				key={experience.index}
				className={`vertical-timeline-element--${
					experience.index % 2 === 0
						? 'left'
						: 'right'
				}`}
				contentStyle={{
					background: '#1d1836',
					color: '#fff',
				}}
				contentArrowStyle={{
					borderRight: '7px solid  #232631',
				}}
				iconStyle={{
					background: experience.iconBg,
				}}
				icon={
					<div
						name="cardIconContainer"
						className="flex justify-center items-center w-full h-full"
					>
						<img
							name="cardIcon"
							src={experience.icon}
							alt={
								experience.company_name
							}
							className="w-[80%] h-[80%] object-contain"
						/>
					</div>
				}
			>
				<div>
					<h3
						name="cardJobPosition"
						className="text-red-500 text-[24px] font-bold"
					>
						{experience.title}
					</h3>
					<h3>{experience.date}</h3>
					<p
						name="cardCompanyName"
						className="text-secondary text-[16px] font-semibold"
						style={{ margin: 0 }}
					>
						{experience.company_name}
					</p>
				</div>

				<ul className="my-5 list-disc ml-6 space-y-5">
					{experience.points.map(
						(point, index) => (
							<li
								key={`experience-point-${index}`}
								className="text-white-100 text-[14px] pl-1 tracking-wider"
							>
								{point}
							</li>
						)
					)}
				</ul>
			</VerticalTimelineElement>
		</div>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div
				name="titleExperience"
				variants={textVariant()}
			>
				<p
					className={`${styles.sectionSubText} text-center`}
				>
					My Journey
				</p>
				<h2
					className={`${styles.sectionHeadText} text-center`}
				>
					Work Experience
				</h2>
			</motion.div>

			<div className="mt-20">
				<VerticalTimeline>
					{experiences.map(
						(experience, index) => (
							<ExperienceCard
								key={`experience-${index}`}
								experience={
									experience
								}
							/>
						)
					)}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, 'work');
