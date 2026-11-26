import SrvSmallCard from '../../Standards/SrvSmallCard';
import {ServiceData} from '../../../SiteData/SiteData';

const SrvCard1 = () => {
	return (
		<div className=''>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2 p-2'>
				{ServiceData.map((card) => (
					<SrvSmallCard 
					key={card.id} 
					Num={String(card.id).padStart(2, '0')} 
					Title={card.Title} Image={card.S_image} 
					/>
				))}
			</div>
		</div>
	)
}

export default SrvCard1
