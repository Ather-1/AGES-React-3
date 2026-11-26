const SrvSmallCard1 = ({ Num, Title, Image }) => {
	return (
		<div className="relative rounded-md overflow-hidden cursor-pointer h-36">
			<div className="absolute inset-0 z-0">
				<img
					src={Image}
					alt={Title}
					className="w-full h-full object-cover object-cneter"
				/>
			</div>

			<div className="absolute inset-0 z-10 bg-black/45"></div>

			<div className="relative z-20 flex items-start gap-4 p-3">
				<span className="text-md font-bold p-1 leading-none rounded-sm bg-txt1 border border-gray-400">
					{Num}
				</span>

				<h4 className=" text-lg font-semibold tracking-wide leading-[1.1] text-light">
					{Title}
				</h4>
			</div>
		</div>
	);
};

export default SrvSmallCard1;
