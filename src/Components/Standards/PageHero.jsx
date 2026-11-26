const Hero = ({Image, Label, Heading, Text}) => {
  return (
    <div 
        style={{ backgroundImage: `url(${Image})`}}
        className="relative w-full bg-cover bg-center border-b-3 border-txt1">
        
        <div className="absolute inset-0 bg-black/40 lg:bg-transparent z-0"></div>
        
        <div className="Adjust relative z-10 flex flex-col items-start gap-2 py-10 md:py-12 lg:py-16">
            <h6 className="text-sm lg:text-lg font-semibold tracking-wider text-txt1" >{Label}</h6>
            <h1 className="text-[42px] md:text-5xl lg:text-7xl font-semibold tracking-wider text-light" >{Heading}</h1>
            <p className="text-[10px] font-medium tracking-widest md:w-1/2 lg:w-1/1.5 text-light">{Text}</p>
            <div className="w-24 h-0.5 bg-txt1"></div>
        </div>
    </div>
  )
}

export default Hero