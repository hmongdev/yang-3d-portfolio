import BallCanvas from './canvas/Ball';
import SectionWrapper from './Experience';
import { technologies } from '../constants';

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div
					className="w-28 h-28 hover:shadow-xl"
					key={technology.name}
				>
					<BallCanvas icon={technology.icon} />
					<p className="text-center text-md hover:text-red-500">
						{technology.name}
					</p>
				</div>
			))}
		</div>
	);
};

export default Tech;
