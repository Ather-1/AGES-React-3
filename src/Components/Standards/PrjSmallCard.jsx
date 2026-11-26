import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const PrjSmallCard = ({Id, Title, Category, Image}) => {
  return (
	<Link to={`/projects/${Id}`} 
		className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition group"
	>

		<img src={Image} alt={Title}
			className="w-full h-56 object-cover"
        	loading="lazy"
		/>

		<div className="flex items-center justify-between p-3">
			<div>
				<h3 className="font-bold text-dark text-lg group-hover:text-yellow-500 transition">{Title}</h3>
				<p className="text-gray-500 text-sm">{Category}</p>
			</div>

			<span className="bg-dark text-white p-2.5 rounded-full group-hover:bg-yellow-400 group-hover:text-dark transition">
				<FiArrowRight />
			</span>
		</div>
	</Link>
  )
}

export default PrjSmallCard
