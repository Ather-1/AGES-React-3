import { useState } from "react";
import { projectsData } from '../../../SiteData/SiteData';
import PrjSmallCard from '../../Standards/PrjSmallCard.jsx';

const categories = [
	"All Projects",
	"Infrastructure",
	"Water Resources",
	"Buildings",
	"Transportation",
	"Environmental",
	"Other",
]

const ProjectFilter = () => {

	const [activeCat, setActiveCat] = useState("All Projects");
	const filteredProjects = projectsData.filter((project) => {
		if (activeCat === "All Projects") return true
			return project.category === activeCat
	})

	return (
		<section>
			<div className="LRP">

				<div className="flex flex-wrap gap-3 mb-10">
					{categories.map((cat) => (
						<button key={cat} onClick={() => setActiveCat(cat)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition ${
								activeCat === cat ? "bg-yellow-400 text-dark" : "bg-white text-gray-600 border border-gray-300 hover:border-yellow-400"}`}
						>
							{cat}
						</button>
					))}
				</div>


				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{filteredProjects.map((project => (
						<PrjSmallCard  
							key={project.id}
							Id={project.id}
							Title={project.title}
							Category={project.category}
							Image={project.images[0]}
						/>
					)))}
				</div>




			</div>
		</section>
	)
}

export default ProjectFilter
