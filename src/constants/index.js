import {
	asana,
	xcode,
	expressjs,
	pgsql,
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	prime,
	jtellr,
	sfg,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Responsive Design',
		icon: web,
	},
	{
		title: `React.js for Web / Mobile`,
		icon: mobile,
	},
	{
		title: 'Unity / Unreal Engine',
		icon: backend,
	},
	{
		title: 'YouTube Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	// {
	// 	name: 'TypeScript',
	// 	icon: typescript,
	// },
	{
		name: 'React JS',
		icon: reactjs,
	},
	// {
	// 	name: 'Redux Toolkit',
	// 	icon: redux,
	// },
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'Express JS',
		icon: expressjs,
	},
	{
		name: 'PostgreSQL',
		icon: pgsql,
	},
	// {
	// 	name: 'MongoDB',
	// 	icon: mongodb,
	// },
	{
		name: 'Xcode',
		icon: xcode,
	},
];

const experiences = [
	{
		title: 'Front-End Software Engineer',
		company_name: 'JourneyTellr',
		icon: jtellr,
		iconBg: '#E6DEDD',
		date: 'Jan 2023 - Present',
		points: [
			'Redesigned react native components and theme to match wireframes according to product team ',
			'Created svg icons from scratch and implemented into components',
			'Technologies: JavaScript, React-Native, Cocoapods, Xcode, Flipper, Asana, Microsoft 365, Azure AWS, React-Query, React-Navigation',
		],
	},

	{
		title: 'Full Stack Software Engineer Student',
		company_name: 'Prime Digital Academy',
		icon: prime,
		iconBg: '#383E56',
		date: 'May 2022 - Sep 2022 ',
		points: [
			'Completed 20-week, full-time, full-stack software engineering program, developing technical and non-technical skills in a highly collaborative environment',
			'Designed two full-stack web applications in modern technologies',
			'Practiced Agile development, standups, weekly group projects, whiteboard coding challenges, diversity, equity, and inclusion training, hybrid work, time management, and active listening',
			'Technologies: JavaScript, PostgreSQL, Express, React, Node',
		],
	},
	{
		title: 'Software Developer Apprentice',
		company_name: 'Software for Good',
		icon: sfg,
		iconBg: '#E6DEDD',
		date: 'Nov 2021 - Feb 2022',
		points: [
			'Designed a backend feature that allows admin accounts to manually add applicants into the database, if deadline has expired',
			'Familiarized with Model View Controller (MVC) architecture and CRUD',
			'Worked with a real-world client to design features for the city of Saint Paul’s Right Track program',
			'Technologies: Ruby, Ruby on Rails, Rspec, Heroku',
		],
	},
	// {
	// 	title: 'React.js Developer',
	// 	company_name: 'Starbucks',
	// 	icon: starbucks,
	// 	iconBg: '#383E56',
	// 	date: 'March 2020 - April 2021',
	// 	points: [
	// 		'Developing and maintaining web applications using React.js and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 		'Participating in code reviews and providing constructive feedback to other developers.',
	// 	],
	// },
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Car Rent',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: carrent,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Job IT',
		description:
			'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: jobit,
		source_code_link: 'https://github.com/',
	},
	{
		name: 'Trip Guide',
		description:
			'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'supabase',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: tripguide,
		source_code_link: 'https://github.com/',
	},
];

export { services, technologies, experiences, testimonials, projects };
