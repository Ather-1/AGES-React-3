import { projectsData } from '../../../SiteData/SiteData';
import PrjSmallCard from '../../Standards/PrjSmallCard.jsx';
import { Btn } from '../../Typography';

import { FaArrowRight } from "react-icons/fa";





const Project = () => {
	const Getproject = projectsData.slice(0, 6);



	return (
		<div className='flex flex-col items-center  gap-8'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex flex-col items-start gap-2.5 text-center'>
					<div className="flex items-center gap-4">
						<h2 className="text-xl font-bold tracking-widest text-txt1 border-l-3 pl-3">OUR PROJECTS</h2>
						<span className="w-24 h-0.5 bg-yellow-400 rounded-full"></span>
					</div>

					<h2 className='text-3xl font-bold tracking-wider text-dark1'>Engineering Excellence in Action</h2>
					<p className='text-sm font-medium tracking-wider text-gray-500'>Explore some of our notable projects that showcase our expertise and commitment to quality.</p>
				</div>

				<div className='lg:block'>
					<Btn className='flex items-center gap-3'>Explore Our Projects
						<span>
							<FaArrowRight />
						</span>
					</Btn>
				</div>
			</div>



			<div className='p-2.5 rounded-xl bg-white border border-gray-300 shadow-md shadow-dark1/60'>
				<div className='grid grid-cols-[2fr_1fr_1fr] gap-3'>
					{Getproject.map((prj) => (
						<PrjSmallCard
							key={prj.id}
							Id={prj.id}
							Title={prj.title}
							Category={prj.category}
							Image={prj.images[0]}
						/>
					))}
				</div>
			</div>


			<div className='lg:hidden'>
				<Btn className='flex items-center gap-3'>Explore Our Projects
					<span>
						<FaArrowRight />
					</span>
				</Btn>
			</div>
		</div>
	)
}

export default Project
