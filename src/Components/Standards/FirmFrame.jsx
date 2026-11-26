const FirmFrame = ({ ICON: Icon, Heading, Text }) => {
	return (
		<div className=" border border-gray-300 w-full px-6 py-4 flex gap-4 items-center justify-start rounded-lg shadow-lg">


			<div className="border border-gray-300 bg-dark1 text-txt1 rounded-md">
				<Icon className="text-4xl px-2 py-1.5 " />
			</div>

			<div className="flex flex-col gap-0.5">
				<h3 className="text-sm font-bold tracking-wider text-dark1">{Heading}</h3>

				{Text.map((line, index) => (
					<p key={index} className="text-xs font-medium tracking-wider leading-[1.1] text-gray-500">{line}</p>
				))}

				{/* <p>{Text}</p> */}
			</div>



		</div>
	)
}

export default FirmFrame