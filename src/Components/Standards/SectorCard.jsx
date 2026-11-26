import React from 'react'

const SectorCard = ({Image, Title, Text}) => {
  return (
		<div className='relative w-full h-90 overflow-hidden border border-gray-500 rounded-lg'>
			<div className='absolute inset-0 z-0'>
				<img src={Image} alt="" className='w-full h-full object-cover' />
			</div>
			<div className='absolute inset-0 z-10 flex flex-col gap-0.5 items-start justify-end bg-black/50 p-8'>
				<h3 className='text-4xl font-semibold tracking-wider text-light'>{Title}</h3>
				<p className='text-sm font-semibold tracking-wider text-gray-300'>{Text}</p>
			</div>
		</div>
  )
}

export default SectorCard
