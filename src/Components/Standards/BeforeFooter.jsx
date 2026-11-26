import { Btn } from '../Typography.jsx';


const BeforeFooter = ({ Heading, Text, Btn1, Btn2 }) => {
	return (
		<section className='bg-txt1 px-16 py-8'>

			<div className='grid md:grid-cols-2 px-3'>
				<div className='flex flex-col gap-2'>
					<h3 className='text-4xl font-bold tracking-wide text-dark1'>{Heading}</h3>
					<p className='text-sm font-medium tracking-wide w-1/1.5'>{Text}</p>
				</div>
				<div className='flex items-center justify-end gap-4'>
					<Btn>{Btn1}</Btn>
					<Btn>{Btn2}</Btn>
				</div>
			</div>
		</section>
	)
}

export default BeforeFooter
