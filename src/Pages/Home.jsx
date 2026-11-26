import HeroSection from '../Components/PageSection/HomeSections/Hero.jsx';
import AboutSection from '../Components/PageSection/HomeSections/About.jsx';
import SectorSection from '../Components/PageSection/HomeSections/Sectors.jsx';
import ProjectSection from '../Components/PageSection/HomeSections/Project.jsx';
import ServicesSection from '../Components/PageSection/HomeSections/Services.jsx'

import BackImage from '../assets/Banners/ServiceBanner.png';
import BuildImg from '../assets/Banners/Build.png';
import { Btn } from '../Components/Typography.jsx';
import { FaArrowRight, FaRegHandshake } from "react-icons/fa6";



const Home = () => {
	return (
		<div>

			<section>
				<HeroSection />
			</section>



			<section className='LRP'>
				<div className=''>
					<AboutSection />
				</div>
			</section>


			<section className='bg-cover bg-center' style={{backgroundImage: `url(${BackImage})`}}>
				<div className='border'>
					<SectorSection />
				</div>
			</section>

			<section>
				<div className='LRP'>
					<ServicesSection />
				</div>
			</section>


			<section>
				<div className='LRP'>
					<ProjectSection />
				</div>
			</section>



			<section className='bg-cover bg-center' style={{backgroundImage: `url(${BuildImg})`}}>
				<div className='w-full h-full bg-black/35'>
					<div className='LRP grid grid-cols-2 items-center'>

						<div className='flex items-center gap-4'>
							<div className='text-7xl text-txt1'>
								<FaRegHandshake />
							</div>
							<div>
								<h3 className='text-4xl font-bold tracking-wide text-light'>Let's Build a <span className='text-txt1'>Better Tomorrow</span></h3>
								<p className='text-sm font-semibold tracking-wider text-gray-300'>Partner with AGES for innovative and relaible engineering solution.</p>
							</div>
						</div>
						<div className='flex items-center justify-end'>
							<Btn className='flex items-center gap-2 bg-txt1 text-dark1 font-extrabold tracking-widest hover:text-light'>
								Contact Us <FaArrowRight />
							</Btn>
						</div>
					</div>
				</div>
			</section>


		</div>
	)
}

export default Home