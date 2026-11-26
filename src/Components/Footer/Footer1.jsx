import FooterLogo from '../../assets/AgesLogo.png';

const Footer1 = () => {
	return (
		<div className='flex flex-col items-start gap-2'>
			<div className='p-2 border border-light bg-light/25'>
				<img src={FooterLogo} alt="AGES Logo" className='h-18 w-auto'/>
			</div>
			<p className='text-sm font-medium tracking-wider text-gray-300'>Engineering for a Sustainable Future.</p>
		</div>
	)
}

export default Footer1
