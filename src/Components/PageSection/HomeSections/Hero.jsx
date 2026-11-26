import HeroImg from '../../../assets/Banners/HomeHero.png'
import { FaArrowRight } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";

import {Btn} from '../../Typography.jsx'




const Hero = () => {
	return (
		<div 
			style={{backgroundImage: `url(${HeroImg})`}}
			className='w-full h-[75vh] bg-cover flex flex-col gap-2 items-start px-8 py-6'>
				<span className='text-sm font-semibold tracking-wider text-txt1 border-l-3 pl-2'>Engineering Excellence</span>

				<h1 className='text-6xl font-semibold tracking-wider leading-[1.1] text-light'>Building <br /> <span className='text-txt1'>Better Tomorrow</span>.</h1>
				
				<p className='text-xs tracking-wider font-medium text-light'>Onnovative engineering solutions for a sustainable, concentrated and prosperous future.</p>
				
				
				<div className='flex gap-6 items-center '>
					<Btn className='flex items-center gap-2 bg-txt1 text-dark1 hover:text-light'>Explore Our Services <FaArrowRight /></Btn>
					<Btn className='flex items-center gap-2 bg-transparent'><IoPlay /> Watch Our Story</Btn>

				</div>
		</div>
	)
}

export default Hero
