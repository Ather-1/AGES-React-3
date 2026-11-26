import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { Para } from '../../Typography.jsx';

const VissonMisson = ({Icon, Title, Text, className=''}) => (
	<div className="flex items-center gap-4 px-6 py-4 rounded-lg backdrop-blur-xs border border-gray-600">
		<Icon className="text-3xl text-light" />
		<div >
			<h5 className={`"text-lg font-bold text-light ${className}`}>{Title}</h5>
			<Para className='text-txt1 font-light' >{Text}</Para>
		</div>
	</div>

)


const AboutCard1 = () => {
  return (
	<div className='flex flex-col items-center gap-4'>
		<h4 className="text-xl font-bold text-txt1">Direction & Purpose</h4>
		<h3 className="text-3xl font-bold text-light">Vission & <span>Mission</span></h3>


		<div className='grid lg:grid-cols-2 items-center gap-2.5'>
			<VissonMisson Icon={FaEye} Title={"Our Vission"} Text={"Professional excellence with integrity and division."}/>
			<VissonMisson Icon={TbTargetArrow} Title={"Our Mission"} Text={"To operate globally as a represented and credible engineering firm."}/>
		</div>
	</div>
  )
}

export default AboutCard1
