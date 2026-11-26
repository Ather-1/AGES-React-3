export const Btn = ({children, Icon, to='', className=''}) => {
    return (
        <button onClick={to}
            className={`
				group text-md font-semibold tracking-wider leading-none text-BtnTxt1 hover:text-BtnBg1
				px-4.5 py-3 flex items-center gap-2 cursor-pointer
				rounded-md border border-gray-400 bg-BtnBg1 hover:bg-transparent shadow-md
				transition-colors duration-300 ${className}`}>
            {children}
			{Icon && 
				<Icon />
			}
        </button>
    )
}





export const Para = ({children, className=''}) => {
	return (
		<p className={`text-sm font-medium tracking-wider leading-5 text-dark2 ${className}`}>
			{children}
		</p>
	)
}





export const List = ({children}) => {
    return (
        <li className="list-none text-md font-semibold tracking-wider">
            {children}
        </li>
    )
}

