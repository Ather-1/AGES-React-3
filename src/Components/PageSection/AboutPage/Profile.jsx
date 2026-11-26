import {Btn} from '../../Typography.jsx';


const Profile = () => {
  return (
	<div className='LRP flex items-center justify-center'>


	  <div className='flex flex-col items-center text-center gap-4 w-2/3 rounded-2xl border-2 border-dashed border-txt1 px-4 py-6 bg-white'>
		<h3 className='text-3xl font-bold text-txt1 tracking-wider'>Company Profile</h3>
		<p className='text-sm font-medium tracking-wider text-gray-600'>Download the official AGES Consultants profile brochure (PDF) for a complete overview of the firm, its organization chart, registration details and service capability statement.</p>
		<Btn className={'bg-txt1 text-dark1 tracking-wider'}>Request the Profile</Btn>

	  </div>
	</div>
  )
}

export default Profile
