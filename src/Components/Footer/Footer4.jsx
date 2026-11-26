import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer4 = () => {
  return (
	<div>
		<div className="flex flex-col gap-3 p-4">
			<h5 className='text-lg font-bold text-light'>Get In Touch</h5>
			<div className="flex flex-col gap-1">
				<p className="flex items-center gap-2 text-light "><span><FaPhoneAlt /></span> +92 12 3654789</p>
				<p className="flex items-center gap-2 text-light"><span><FaMailBulk /></span> info@ages.com.pk</p>
				<p className="flex items-center gap-2 text-light"><span><FaLocationDot /></span> Peshawar, Pakistan</p>
			</div>
			<div className="flex items-center gap-4 text-light">
				<span className="text-2xl"> <FaLinkedinIn /> </span>
				<span className="text-2xl"> <GrFacebookOption /> </span>
				<span className="text-2xl"> <FaInstagram /> </span>
				<span className="text-2xl"> <FaYoutube /> </span>
			</div>
		</div>
	</div>
  )
}

export default Footer4
