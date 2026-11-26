import React from 'react'

const SrvBigCard = ({Num, Title, Description, Text, Points, Image}) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 border border-gray-300 rounded-xl shadow-md overflow-hidden'>

			<div className='border-r-4 border-txt1 h-80'>
				<img src={Image} alt={Title} className='w-full h-full object-cover' />
			</div>

			<div className='flex flex-col items-start gap-2.5 p-3 bg-white'>


				<div className='flex gap-4 items-center'>
					<span className='text-sm font-bold leading-none p-1.5 border border-gray-400 rounded-sm bg-txt1'>{Num}</span>
					<h3 className='text-2xl font-bold tracking-wide text-dark2'>{Title}</h3>
				</div>

				<p className='text-md font-bold tracking-wide'>{Description}</p>

				<div className='w-20 h-1 bg-txt1'></div>

				<p className='text-xs font-semibold tracking-wider '>{Text}</p>

				<span className='text-lg font-bold tracking-wide px-1.5 border border-l-4 border-txt1'>Our Services Include:</span>

				<div className='grid md:grid-cols-2 gap-1'>
					{Points && Points.map((point, index) => (
						<div key={index} 
							className='flex gap-1'>
							<span className='text-xs  font-bold text-txt1'>&#10004;</span>
							<span className='text-xs font-semibold tracking-wide'>{point}</span>
						</div>
					))}
				</div>

			</div>





		</div>
	)
}

export default SrvBigCard
