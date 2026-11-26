import FooterBG from '../../assets/Banners/ServiceBanner.png'
import Footer1 from './Footer1.jsx';
import Footer2 from './Footer2.jsx';
import Footer3 from './Footer3.jsx';
import Footer4 from './Footer4.jsx';


const Footer = () => {
	return (
		<div style={{ backgroundImage: `url(${FooterBG})` }} className='bg-cover bg-center border-t-4 border-txt1' >
			<section className='w-full h-full p-8 flex flex-col gap-10 bg-black/55'>


				<section className='grid grid-cols-4 items-start justify-center'>
					<div className='border-r border-gray-400 h-full'> <Footer1 /> </div>
					<div className='border-r border-gray-400 h-full'> <Footer2 /> </div>
					<div className='border-r border-gray-400 h-full'> <Footer3 /> </div>
					<div> <Footer4 /> </div>

				</section>



				<section className='flex items-center justify-between bg-black/75 px-4 py-1.5 rounded-full'>
					<div><p className='text-sm tracking-widest font-bold text-light'>© 1999-2026 AGES Consultants.</p></div>
					<div className='flex gap-4 text-sm text-white font-bold tracking-wide '>
						<span>Privicy Policy</span>
						<span>Terms & Conditions</span>
					</div>
				</section>
			</section>

		</div>
	)
}

export default Footer
