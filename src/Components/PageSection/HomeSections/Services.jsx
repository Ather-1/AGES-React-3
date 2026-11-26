import { ServiceData } from "../../../SiteData/SiteData";
import SrvSmallCard from "../../Standards/SrvSmallCard";
import { FaArrowRight } from "react-icons/fa";
import { Btn } from "../../Typography.jsx";

const Services = () => {
	const GetSrvData = ServiceData.slice(0, 8);

	return (
		<div className="flex flex-col items-center  gap-8">
			<div className="flex flex-col items-center text-center">
				<div className="flex items-center justify-center gap-4">
					<span className="w-24 h-0.5 bg-yellow-400 rounded-full"></span>
					<h2 className="text-xl font-bold tracking-widest text-txt1">
						OUR SERVICES
					</h2>
					<span className="w-24 h-0.5 bg-yellow-400 rounded-full"></span>
				</div>

				<h2 className="text-3xl font-bold tracking-wider text-dark1">
					Engineering Solution for Every Need
				</h2>
				<p className="text-sm font-medium tracking-wider text-gray-500">
					Form complext to completion. AGES delivers end-to-end engineering services.
				</p>
			</div>

			<div className="grid grid-cols-4 gap-1">
				{GetSrvData.map((Srv) => (
					<SrvSmallCard
						key={Srv.id}
						Num={String(Srv.id).padStart(2, "0")}
						Title={Srv.Title}
						Image={Srv.S_image}
					/>
				))}
			</div>

			<div className="">
				<Btn className="flex items-center gap-3">
					Explore Our Projects
					<span>
						<FaArrowRight />
					</span>
				</Btn>
			</div>
		</div>
	);
};

export default Services;
