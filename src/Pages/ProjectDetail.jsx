import { useParams, Link } from "react-router-dom";
import {
	HiOutlineDocumentText,
	HiOutlineMapPin,
	HiOutlineUsers,
	HiOutlineBuildingLibrary,
	HiOutlineCalendarDays,
	HiOutlineFlag,
} from "react-icons/hi2";
import { projectsData } from "../SiteData/SiteData";
import HeroSection from "../assets/Banners/ServiceBanner.png";



const MetaCard = ({ Icon, heading, description }) => {
	if (!description) return null;
	return (
		<div className="flex items-start gap-4 p-4 rounded-lg border border-gray-300 bg-light shadow-md cursor-pointer hover:shadow-xl">
			<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#091E3A]">
				<Icon className="h-6 w-6 text-[#F5B800]" />
			</div>
			<div className="">
				<h4 className="text-base font-bold leading-snug text-[#091E3A]">
					{heading}
				</h4>
				<p className="mt-0.5 text-xs text-slate-700">
					{description}
				</p>
			</div>
		</div>
	);
};


const ProjectDetail = () => {

	const { id } = useParams();
	const project = projectsData.find((p) => String(p.id) === String(id));

	if (!project) {
		return (
			<div className="LRP py-16 text-center">
				<h1 className="text-2xl font-bold text-[#091E3A]">Project not found</h1>
				<Link
					to="/projects"
					className="mt-4 inline-block text-sm font-semibold text-[#091E3A] underline"
				>
					Back to all projects
				</Link>
			</div>
		);
	}


	const MetaData = [
		{
			heading: "Name of Project",
			description: project.title,
			Icon: HiOutlineDocumentText,
		},
		{
			heading: "Commencement",
			description: project.commencement,
			Icon: HiOutlineCalendarDays,
		},
		{
			heading: "Client",
			description: project.client,
			Icon: HiOutlineUsers,
		},
		{
			heading: "Completion",
			description: project.completion,
			Icon: HiOutlineFlag,
		},
		{
			heading: "Funded by",
			description: project.fundedBy,
			Icon: HiOutlineBuildingLibrary,
		},
		{
			heading: "Location / Country",
			description: `${project.location} / ${project.country}`,
			Icon: HiOutlineMapPin,
		},
	];

	const mainImage = project.images?.[0];
	const remainingImages = project.images?.slice(1) || [];



	return (
		<div>
			<section
				style={{ backgroundImage: `url(${HeroSection})` }}
				className="flex flex-col gap-4 bg-cover bg-center px-10 py-21"
			>
				<Link
					to="/projects"
					className="text-sm font-semibold tracking-wider text-white hover:underline"
				>
					All Projects
				</Link>
				<h2 className="text-5xl font-medium tracking-wider text-[#F5B800]">
					{project.title}
				</h2>
			</section>



			<section className="LRP">
				<div className="grid md:grid-cols-2 items-start gap-4">
					<div className="overflow-hidden rounded-xl shadow-md">
						{mainImage && (
							<img
								src={mainImage}
								alt={project.title}
								className="h-full w-full object-cover"
							/>
						)}
					</div>

					<div className="grid grid-cols-2 items-center justify-center gap-2.5 p-2 rounded-lg border border-gray-300 bg-white shadow-xl">
						{MetaData.map((card) => (
							<MetaCard
								Icon={card.Icon}
								heading={card.heading}
								description={card.description}
							/>
						))}
					</div>
				</div>
			</section>



			<section className="LRP">
				{project.description && (
					<div className="mb-8">
						<h3 className="mb-2 text-2xl font-bold text-[#091E3A]">
							Project Overview
						</h3>
						<p className="text-base leading-relaxed text-slate-700">
							{project.description}
						</p>
					</div>
				)}


				{project.components?.length > 0 && (
					<div className="mb-10">
						<h3 className="mb-3 text-xl font-bold text-[#091E3A]">
							Salient Features / Components
						</h3>
						<ul className="list-disc space-y-1.5 pl-6 text-sm leading-relaxed text-slate-700 sm:text-base">
							{project.components.map((comp, index) => (
								<li key={index}>{comp}</li>
							))}
						</ul>
					</div>
				)}
			</section>


			<section className="LRP">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{remainingImages.map((imgSrc, idx) => (
						<div
							key={idx}
							className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
						>
							<img
								src={imgSrc}
								alt={`${project.title} view ${idx + 2}`}
								className="h-40 w-full object-cover"
							/>
						</div>
					))}
				</div>
			</section>







		</div>
	)
}

export default ProjectDetail
