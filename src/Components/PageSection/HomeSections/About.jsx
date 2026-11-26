import { LuShieldCheck, LuHandshake, LuSettings, LuLightbulb } from "react-icons/lu";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

import AboutImage from '../../../assets/Banners/AboutBanner.jpg'

const AboutStatCard = ({ Icon, Title, Text }) => {
	return (
		<div className="flex flex-col items-center gap-2 border-r border-gray-400 last:border-none">
			<div className="text-txt1">
				<Icon size={36} />
			</div>
			<div className="flex flex-col text-center">
				<h5 className="text-md font-bold tracking-wider text-dark1">{Title}</h5>
				<p className="text-xs font-semibold text-gray-500 tracking-wider">{Text}</p>
			</div>
		</div>
	);
};


const FirmStatCard = ({ Icon, Title, Text }) => {
	return (
		<div className="flex items-center justify-center gap-2.5 border-r border-gray-400 last:border-none">
			<div className="text-txt1">
				<Icon size={46} />
			</div>
			<div className="">
				<h5 className="text-3xl font-bold tracking-wider text-light ">{Title}</h5>
				<p className="text-sm font-medium tracking-wider text-gray-300">{Text}</p>
			</div>
		</div>
	)
}

const About = () => {
	const AboutStatsData = [
		{ id: 1, icon: RiShieldCheckFill, title: "Quality", text: "Assurance" },
		{ id: 2, icon: FaHandshakeAngle, title: "Client", text: "Focused" },
		{ id: 3, icon: IoSettings, title: "On-Time", text: "Delivery" },
		{ id: 4, icon: HiLightBulb, title: "Innovative", text: "Approach" },
	];
	const FirmStatsData = [
		{ id: 1, icon: BsFillBuildingsFill, title: "100+", text: "Projects Completed" },
		{ id: 2, icon: FaPeopleRobbery, title: "50+", text: "Happy Clients" },
		{ id: 3, icon: FaAward, title: "25+", text: "Years of Experience" },
		{ id: 4, icon: FaGlobeAmericas, title: "10+", text: "Countries Served" },
	];

	return (
		<div className="flex flex-col gap-8">
			<div className="grid md:grid-cols-2 gap-4">
				<div className="border-r-4 border-txt1 rounded-[18px_0_0_18px] border overflow-hidden shadow-md shadow-gray-700/60 hover:shadow-lg cursor-pointer">
					<img src={AboutImage} alt="" className="w-full h-full object-cover" />
				</div>

				<div className="flex flex-col gap-10 p-3">
					<div className="flex flex-col gap-3">
						<h3 className="text-4xl font-bold tracking-wider text-dark1"> <span className="text-txt1">About</span> AGES Consultant</h3>
						<p className="text-xs font-semibold tracking-wider text-gray-900 ">We are a leading civil engineering consultancy in pakistan, dedicated to delivering innovative, sustainable and cost-effective solutions accross infracture and development projects. </p>

						<div className="flex gap-3 items-center border border-l-4 border-gray-500 px-2"><h5 className="text-lg font-bold text-dark1">Vission:</h5><p className="text-xs font-semibold tracking-wider text-gray-600">Professional excellence with integrity and division.</p></div>
						<div className="flex gap-3 items-center border border-l-4 border-gray-500 px-2"><h5 className="text-lg font-bold text-dark1">Mission:</h5><p className="text-xs font-semibold tracking-wider text-gray-600">To operate globally as a represented and credible engineering firm.</p></div>

					</div>


					<div className="grid grid-cols-4 items-center justify-between mt-auto">
						{AboutStatsData.map((item) => (
							<AboutStatCard
								key={item.id}
								Icon={item.icon}
								Title={item.title}
								Text={item.text}
							/>
						))}
					</div>
				</div>

			</div>




			<div className="grid grid-cols-4 items-center justify-between px-8 py-3 rounded-xl border border-black bg-dark2">
				{FirmStatsData.map((item) => (
					<FirmStatCard
						key={item.id}
						Icon={item.icon}
						Title={item.title}
						Text={item.text}
					/>
				))}
			</div>
		</div>
	);
};

export default About;
