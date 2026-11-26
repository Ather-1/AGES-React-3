import Hero from '../Components/Standards/PageHero.jsx';
import HeroImg from '../assets/Banners/AboutBanner.jpg';
import CardBgImg from '../assets/Banners/AboutCardImg.png';
import Card1 from '../Components/PageSection/AboutPage/AboutCard1.jsx';
import Card2 from '../Components/PageSection/AboutPage/AboutCard2.jsx';
import Profile from '../Components/PageSection/AboutPage/Profile.jsx';
import BeforeFooter from '../Components/Standards/BeforeFooter.jsx';
import AboutContent from '../Components/PageSection/AboutPage/AboutContent.jsx';
import FirmFrame from '../Components/Standards/FirmFrame.jsx';
import { AboutFrameData } from '../SiteData/SiteData.js';



const About = () => {
	return (
		<section>
			<Hero Image={HeroImg}
				Label={'Who We Are'}
				Heading={<>About <span className='text-txt1'>Us</span></>}
				Text={<>We are committed to supporting your vision with expert civil engineering guidance. Reach out to discuss your upcoming projects, consultations, or partnership inquiries today.</>}
			/>


			<div className='LRP grid grid-cols-1 lg:grid-cols-[2fr_1.2fr] gap-10'>
				<div className=''>
					<AboutContent />
				</div>

				<div className='flex flex-col gap-4'>
					{AboutFrameData.map((item) => (
						<FirmFrame key={item.id} ICON={item.icon} Heading={item.title} Text={item.line} />
					))}
				</div>	

			</div>



			<div style={{backgroundImage: `url(${CardBgImg})`}} className='bg-cover bg-center'>
				<div className='LRP flex flex-col gap-12'>
					<Card1 />
					<Card2 />
				</div>
			</div>


			<div>
				<Profile />
			</div>

			<div>
				<BeforeFooter Heading={"Work with a firm built on integrity."} Text={"Let’s discuss how AGES can add qualitative value to your next project."}  Btn1={"Contact Us"} Btn2={"Our Services"}/>
			</div>



		</section>
	)
}

export default About
