import SrvBigCard from '../../Standards/SrvBigCard.jsx';
import {ServiceData} from '../../../SiteData/SiteData.js';



const SrvCard2 = () => {
  return (
	<div className='flex flex-col gap-4 p-3'>
		{ServiceData.map((card) => [
			<SrvBigCard 
				key={card.id}
				Num={String(card.id).padStart(2, '0')}
				Title={card.Title}
				Description={card.Description}
				Text={card.Text}
				Points={card.SrvPoint}
				Image={card.S_image}/>
		])
		}
	</div>
  )
}

export default SrvCard2
