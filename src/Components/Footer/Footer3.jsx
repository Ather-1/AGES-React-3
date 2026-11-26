import Menu from '../Header/Menu'

const Footer3 = () => {
	return (
		<div className='flex flex-col items-center gap-2'>
			<h5 className='text-lg font-bold text-light'>Our Services</h5>
			<nav className='flex flex-col items-center gap-0.5 text-sm font-semibold tracking-wider text-gray-400'>
				<Menu />
			</nav>
		</div>
	)
}

export default Footer3