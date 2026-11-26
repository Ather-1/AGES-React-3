import HeroImg from '../assets/Banners/ServiceBanner.png';

import Hero from '../Components/Standards/PageHero.jsx';
import SrvCard1 from '../Components/PageSection/ServicePage/SrvCard1.jsx';
import SrvCard2 from '../Components/PageSection/ServicePage/SrvCard2.jsx';
import BeforeFooter from '../Components/Standards/BeforeFooter.jsx';

const Service = () => {
	return (
		<section>
			<Hero Image={HeroImg}
				Label={'What We Do'}
				Heading={<>Our <span className='text-txt1'>Services</span></>}
				Text={<>We provide comprehensive engineering, structural design, and consultancy services tailored to your needs. Explore how our technical expertise brings complex infrastructure projects to life.</>}
			/>




			<section>
				<div className='LRP'>
					<SrvCard1 />
				</div>
			</section>

			<section>
				<div className='LRP'>
					<SrvCard2 />
				</div>
			</section>


			<div>
				<BeforeFooter Heading={"Need a capability statement or fee proposal?"} Text={"Tell us about your project — our discipline leads will respond promptly."}  Btn1={"Request a Proposal"} Btn2={"See Projects"}/>
			</div>
			



		</section>
	)
}

export default Service