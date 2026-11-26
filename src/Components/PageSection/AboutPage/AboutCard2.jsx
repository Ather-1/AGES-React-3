import React from 'react'


const FiveCards = ({ Number, Title }) => (
	<div className='flex items-center gap-4 px-3 py-3.5 cursor-pointer rounded-md bg-dark1 border border-gray-700 hover:bg-gray-700 hover:translate-x-3 transition-all duration-300'>
		<span className='text-2xl font-bold text-txt1'>{Number}</span>
		<p className='text-sm font-medium tracking-wider text-light '>{Title}</p>
	</div>
)

const AboutCard2 = () => {
	return (
		<div className='grid lg:grid-cols-[1.2fr_1fr] items-center gap-6'>
			<div>
				<h5 className='text-lg font-medium text-txt1 mb-4'>Core Values</h5>
				<h3 className='text-5xl font-bold tracking-wider text-light'>The principles that guide every assignment.</h3>
			</div>

			<div className='flex flex-col gap-2'>
				<FiveCards Number={"01"} Title={"Responsibility to society"} />
				<FiveCards Number={"02"} Title={"Customer satisfaction and loyalty"} />
				<FiveCards Number={"03"} Title={"Organizational and individual growth"} />
				<FiveCards Number={"04"} Title={"Technical excellence with professional ethics"} />
				<FiveCards Number={"05"} Title={"Employee dignity and self-respect"} />
			</div>
		</div>
	)
}

export default AboutCard2
