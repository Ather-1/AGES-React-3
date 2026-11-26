import SectorCard from '../../Standards/SectorCard.jsx';
import { ServiceData } from "../../../SiteData/SiteData.js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { useState, useEffect } from "react";






const Sectors = () => {
	const [current, setCurrent] = useState(0);
	const sectors = ServiceData[current];
	useEffect(() => {
			const interval = setInterval(() => {
				setCurrent((prev) => (prev + 1) % ServiceData.length)
			}, 4000);
			return () => clearInterval(interval)
	}, []);

	 const NextSlider = () => {
			setCurrent((prev) => (prev + 1) % ServiceData.length) 
	}
	const PrevSlider = () => {
		setCurrent((prev) => (prev - 1 + ServiceData.length) % ServiceData.length)
	}

	if (!sectors) return null;

	return (
		<div className="bg-black/50">
			<div className="LRP flex flex-col gap-8">
				<div className='flex flex-col items-center text-center'>
					<div className="flex items-center justify-center gap-4">
						<span className="w-24 h-0.5 bg-yellow-400 rounded-full"></span>
						<h2 className="text-xl font-bold tracking-widest text-txt1">OUR SECTORS</h2>
						<span className="w-24 h-0.5 bg-yellow-400 rounded-full"></span>
					</div>

					<h2 className='text-3xl font-bold tracking-wider text-light'>Divers Sectors. Comprehensive Solution.</h2>
					<p className='text-sm font-medium tracking-wider text-gray-400'>AGES delivers expertise across multiple sectors to meet your engineering needs.</p>

				</div>



				<section className='flex flex-col gap-6'>

					<div>
						<SectorCard 
							Image={sectors.S_image}
							Title={sectors.Title}
							Text={"Surface & Sub-surface Water Investigation"}/>

					</div>

	

						<div className='flex items-center justify-between'>
							<p className='text-sm font-semibold tracking-wider text-gray-400'>{String(current).padStart(2, '0')} / {String(ServiceData.length).padStart(2, '0')}</p>

							<div className='flex items-center justify-end gap-6'>
								<button onClick={PrevSlider} className='p-2 border text-light rounded-2xl'>
									<FaAngleLeft />
								</button>
								<button onClick={NextSlider} className='p-2 border text-light rounded-2xl'>
									<FaAngleRight />
								</button>
							</div>
						</div>

				</section>
	

		




			</div>
		</div>
	)
}

export default Sectors
